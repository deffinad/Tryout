const e = require("express");
var { db } = require("../config/firebase");
const { v4: uuidv4 } = require("uuid");

class ModelMateri {
    async getListMateri(kategori) {
        let data = [];

        const ref = await db.collection("materi");
        const snapshot = await ref.get();

        snapshot.forEach((hasil) => {
            if (hasil.data().kategori == kategori) {
                data.push({
                    id: hasil.id,
                    ...hasil.data()
                })
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

    async getDetailMateri(id) {
        let data = null;

        const materiRef = await db.collection("materi").doc(id);
        const snapshot = await materiRef.get();

        if (snapshot.exists) {
            data = { id: snapshot.id, ...snapshot.data() }
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

    async addMateri(data) {
        let isSuccess = false
        await db.collection('materi').doc().set(data).then(function() {
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

    async updateMateri(data, id) {
        let isSuccess = false
        await db.collection('materi').doc(id).update(data).then(function() {
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

    async deleteMateri(id) {
        let isSuccess = false
        await db.collection('materi').doc(id).delete().then(function() {
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

module.exports = ModelMateri;