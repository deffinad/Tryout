const e = require("express");
var { db } = require("../config/firebase");
const midtransClient = require('midtrans-client');
const { SERVER_KEY } = require("../midtrans.config");

class ModelTransaksi {
    async getListTransaksi(token) {
        let data = [];
        let role = ''

        const ref = await db.collection("transaksi");
        const snapshot = await ref.get();

        const usersRef = await db.collection("users").doc(token)
        const snapUsers = await usersRef.get()

        role = snapUsers.data().role

        for (const hasil of snapshot.docs) {
            let dataProduk = {}
            let dataTryout = []
            const produkRef = await db.collection("produk").doc(hasil.data().id_produk)
            const snapProduk = await produkRef.get()

            dataProduk = { ...snapProduk.data() }

            await Promise.all(snapProduk.data().id_tryout.map(async item => {
                const tryoutRef = await db.collection("list_tryout").doc(item)
                const snapTryout = await tryoutRef.get()

                dataTryout.push({ id: snapTryout.id, ...snapTryout.data() })
            }))

            dataProduk['tryout'] = dataTryout

            let transaksi = hasil.data()

            delete dataProduk.id_tryout
            delete transaksi.id_produk

            data.push({
                id: hasil.id,
                produk: dataProduk,
                user: {
                    ...snapUsers.data(),
                    token: snapUsers.id
                },
                ...transaksi
            })
        }

        let newData = []
        if (role === 'user') {
            newData = data.filter(item => item.token === token)
        } else {
            newData = data
        }

        if (newData.length > 0) {
            return {
                isTrue: true,
                data: newData,
            };
        } else {
            return {
                isTrue: false,
                data: newData
            };
        }
    }

    async getDetailTransaksi(id) {
        let data = null;
        const ref = await db.collection("transaksi").doc(id);
        const snapshot = await ref.get();

        const usersRef = await db.collection("users").doc(snapshot.data().token)
        const snapUsers = await usersRef.get()

        if (snapshot.exists) {
            let dataProduk = {}
            let dataTryout = []
            const produkRef = await db.collection("produk").doc(snapshot.data().id_produk)
            const snapProduk = await produkRef.get()

            dataProduk = { ...snapProduk.data() }

            await Promise.all(snapProduk.data().id_tryout.map(async item => {
                const tryoutRef = await db.collection("list_tryout").doc(item)
                const snapTryout = await tryoutRef.get()

                dataTryout.push({ id: snapTryout.id, ...snapTryout.data() })
            }))

            dataProduk['tryout'] = dataTryout

            let transaksi = snapshot.data()

            delete dataProduk.id_tryout
            delete transaksi.id_produk

            data = {
                id: snapshot.id,
                produk: dataProduk,
                user: {
                    ...snapUsers.data(),
                    token: snapUsers.id
                },
                ...transaksi
            }
        } else {
            data = null
        }

        if (data != null) {
            return {
                isTrue: true,
                data: data,
            };
        } else {
            return {
                isTrue: false,
                data: data
            };
        }
    }

    async addTransaksi(data) {
        let isSuccess = false
        await db.collection('transaksi').doc().set(data).then(function () {
            isSuccess = true
        }).catch(err => {
            isSuccess = false
        });

        if (isSuccess) {
            return true;
        } else {
            return false;
        }
    }

    async updateTransaksi(data, id) {
        let isSuccess = false
        await db.collection('transaksi').doc(id).update(data).then(function () {
            isSuccess = true
        }).catch(err => {
            isSuccess = false
        });

        if (isSuccess) {
            return true;
        } else {
            return false;
        }
    }

    async deleteTransaksi(id) {
        let isSuccess = false
        await db.collection('transaksi').doc(id).delete().then(function () {
            isSuccess = true
        }).catch(err => {
            isSuccess = false
        });

        if (isSuccess) {
            return true;
        } else {
            return false;
        }
    }

    async requestPaymentToken(data) {
        let snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: SERVER_KEY
        });

        const parameter = {
            transaction_details: {
                order_id: "order-to-" + data.id_produk,
                gross_amount: data.gross_amount,
            },
            credit_card: {
                secure: true,
            },
            customer_details: {
                customer_name: data.customer_name,
                email: data.email,
                phone: data.phone,
            },
        }

        const token = await snap.createTransactionToken(parameter)
        if (token) {
            return { isSuccess: true, data: token }
        } else {
            return { isSuccess: false, data: token }
        }
    }
}

module.exports = ModelTransaksi;