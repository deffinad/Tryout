var { db } = require("../config/firebase");

class ModelAuth {
  async checkToken(token) {
    const ref = await db.collection("users").doc(token).get();
    if (ref.exists) {
      return {
        isTrue: true,
        dataUser: ref.data(),
      };
    } else {
      return {
        isTrue: false,
      };
    }
  }

  async login(username, password) {
    let data = null;

    const ref = await db.collection("users");
    const snapshot = await ref.get();

    snapshot.forEach((hasil) => {
      if (hasil.data().username == username && hasil.data().password == password) {
        data = {
          token: hasil.id,
          ...hasil.data()
        }
      }
    });

    if (data != null) {
      const refTransaksi = await db.collection("transaksi")
      const snapTransaksi = await refTransaksi.get()
      let idProduk = []
      let terdaftar = []
      const dikerjakan = []

      for (const hasil of snapTransaksi.docs) {
        if (hasil.data().token === data.token && hasil.data().status === 'berhasil') {
          idProduk.push(hasil.data().id_produk)

          const refJawaban = await db.collection('transaksi').doc(hasil.id).collection('jawaban')
          const snapJawaban = await refJawaban.get()

          for (const value of snapJawaban.docs) {
            let check = dikerjakan.some(val => val.id_tryout === value.data().id_tryout)
            if(!check){
              dikerjakan.push(value.data())
            }
          }
        }
      }

      await Promise.all(idProduk.map(async item => {
        const refProduk = await db.collection("produk").doc(item)
        const snapProduk = await refProduk.get()

        snapProduk.data().id_tryout.map(item => {
          terdaftar.push(item)
        })
      }))

      return {
        isTrue: true,
        dataUser: {
          ...data,
          dashboard: {
            terdaftar: terdaftar.length,
            sudah_dikerjakan: dikerjakan.length,
            belum_dikerjakan: terdaftar.length - dikerjakan.length
          }
        }
      };
    } else {
      return {
        isTrue: false,
      };
    }
  }

  async getListUser() {
    let data = [];

    const ref = await db.collection("users");
    const snapshot = await ref.get();

    snapshot.forEach((hasil) => {
      data.push({
        id: hasil.id,
        ...hasil.data()
      })
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

  async getDetailUser(id) {
    let data = null;

    const materiRef = await db.collection("users").doc(id);
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

  async addUser(data) {
    let isSuccess = false
    await db.collection('users').doc().set(data).then(function () {
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

  async updateUser(data, id) {
    let isSuccess = false
    await db.collection('users').doc(id).update(data).then(function () {
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

  async deleteUser(id) {
    let isSuccess = false
    await db.collection('users').doc(id).delete().then(function () {
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

module.exports = ModelAuth;