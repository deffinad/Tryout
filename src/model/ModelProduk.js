const e = require("express");
var { db } = require("../config/firebase");

class ModelProduk {
    async getListProduk(kategori, token) {
        let data = [];
        let dataTryout = []
        let dataTransaksi = []

        const ref = await db.collection("produk");
        const snapshot = await ref.get();
        const tryoutRef = await db.collection("list_tryout")
        const snapTryout = await tryoutRef.get()

        const refUser = await db.collection("users").doc(token);
        const snapshotUser = await refUser.get();

        const refTransaksi = await db.collection("transaksi");
        const snapshotTransaksi = await refTransaksi.get();

        const role = snapshotUser.data().role

        snapshotTransaksi.forEach(hasil => {
            if(hasil.data().token === token){
                dataTransaksi.push(hasil.data().id_produk)
            }
        })

        snapTryout.forEach(hasil => {
            dataTryout.push({ id: hasil.id, ...hasil.data() })
        })

        snapshot.forEach((hasil) => {
            let tempTryout = []
            if (kategori === 'all' || hasil.data().kategori === kategori) {
                hasil.data().id_tryout.map(val => {
                    let itemTryout = dataTryout.filter(item => item.id === val)
                    tempTryout = [...tempTryout, ...itemTryout]
                })

                const itemProduk = hasil.data()

                delete itemProduk.id_tryout

                if(role === 'user'){
                    data.push({
                        id: hasil.id,
                        tryout: tempTryout,
                        status: dataTransaksi.some(item => item === hasil.id),
                        ...itemProduk
                    })
                }else{
                    data.push({
                        id: hasil.id,
                        tryout: tempTryout,
                        ...itemProduk
                    })
                }
            }
        });

        if (data.length > 0) {
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

    async getDetailProduk(id) {
        let data = null;
        let dataTryout = []

        const ref = await db.collection("produk").doc(id);
        const snapshot = await ref.get();
        const tryoutRef = await db.collection("list_tryout");
        const snapTryout = await tryoutRef.get();

        snapTryout.forEach(item => {
            dataTryout.push({ id: item.id, ...item.data() })
        })

        console.log('anjg')
        if (snapshot.exists) {
            let tempTryout = []
            snapshot.data().id_tryout.map(val => {
                let itemTryout = dataTryout.filter(item => item.id === val)
                tempTryout = [...tempTryout, ...itemTryout]
            })

            const itemProduk = snapshot.data()
            delete itemProduk.id_tryout

            data = {
                id: snapshot.id,
                tryout: tempTryout,
                ...itemProduk
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

    async addProduk(data) {
        let isSuccess = false
        await db.collection('produk').doc().set(data).then(function () {
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

    async updateProduk(data, id) {
        let isSuccess = false
        await db.collection('produk').doc(id).update(data).then(function () {
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

    async deleteProduk(id) {
        let isSuccess = false
        await db.collection('produk').doc(id).delete().then(function () {
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
}

module.exports = ModelProduk;