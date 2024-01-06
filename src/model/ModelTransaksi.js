const e = require("express");
var { db } = require("../config/firebase");
const midtransClient = require('midtrans-client');
const { SERVER_KEY } = require("../midtrans.config");

class ModelTransaksi {
    snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: SERVER_KEY
    });
    async getListTransaksi(token, kategori) {
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
            let dataUser = {}
            const produkRef = await db.collection("produk").doc(hasil.data().id_produk)
            const snapProduk = await produkRef.get()

            dataProduk = { ...snapProduk.data() }

            await Promise.all(snapProduk.data().id_tryout.map(async item => {
                const tryoutRef = await db.collection("list_tryout").doc(item)
                const snapTryout = await tryoutRef.get()

                const materiRef = await db.collection("list_tryout").doc(item).collection('materi')
                const snapMateri = await materiRef.get()

                const refJawaban = await db.collection('transaksi').doc(hasil.id).collection('jawaban')
                const snapJawaban = await refJawaban.get()

                let dataMateri = []
                let countMateriDikerjakan = 0
                let status = false
                for (const val of snapMateri.docs) {
                    dataMateri.push(val.data())
                    for (const itemJawaban of snapJawaban.docs) {
                        if (itemJawaban.data().id_transaksi === hasil.id && itemJawaban.data().id_materi === val.data().id_materi && item === itemJawaban.data().id_tryout) {
                            countMateriDikerjakan = countMateriDikerjakan + 1
                        }
                    }
                }
                if (countMateriDikerjakan === dataMateri.length) {
                    status = true
                }
                dataTryout.push({ id: snapTryout.id, status: status, ...snapTryout.data() })
            }))

            const custRef = await db.collection("users").doc(hasil.data().token)
            const snapCust = await custRef.get()

            dataProduk['tryout'] = dataTryout

            let transaksi = hasil.data()

            delete dataProduk.id_tryout
            // delete transaksi.id_produk

            data.push({
                id: hasil.id,
                produk: dataProduk,
                user: {
                    ...snapCust.data(),
                    token: snapCust.id
                },
                ...transaksi
            })
        }

        let newData = []
        if (role === 'user') {
            if (kategori !== 'all') {
                newData = data.filter(item => item.token === token && item.produk.kategori === kategori)
            } else {
                newData = data.filter(item => item.token === token)
            }
        } else {
            if (kategori !== 'all') {
                newData = data.filter(item => item.produk.kategori === kategori)
            } else {
                newData = data
            }
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
        const parameter = {
            transaction_details: {
                order_id: data.id_produk,
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

        const token = await this.snap.createTransactionToken(parameter)
        if (token) {
            return { isSuccess: true, data: token }
        } else {
            return { isSuccess: false, data: token }
        }
    }

    async addJawaban(data) {
        let isSuccess = false
        const soalRef = await db.collection("list_tryout").doc(data.id_tryout).collection('materi').doc(data.id_materi).collection('soal')
        const snapSoal = await soalRef.get()
        let dataSoal = []
        let nilai = 0
        let point = 10

        snapSoal.forEach(hasil => {
            dataSoal.push({
                id: hasil.id,
                ...hasil.data()
            })
        })

        data.jawaban.map(item => {
            let check = dataSoal.some(val => val.id === item.id_soal && item.value === val.jawaban)

            if (check) {
                nilai = nilai + point
            }
        })

        await db.collection('transaksi').doc(data.id_transaksi).collection('jawaban').doc().set({
            ...data,
            nilai: nilai
        }).then(function () {
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

    async getStatusPayment(order_id) {
        let status = await this.snap.transaction.status(order_id)
        return status
    }
}

module.exports = ModelTransaksi;