const e = require("express");
var { db } = require("../config/firebase");

class ModelTryout {
  async getListTryOut(kategori) {
    let data = [];

    const ref = await db.collection("list_tryout");
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

  async getDetailTryOut(kategori, id) {
    let data = null;
    let dataMateri = []

    const tryOutRef = await db.collection("list_tryout").doc(id);
    const materiRef = await db.collection("list_tryout").doc(id).collection('materi');
    const snapshotTryOut = await tryOutRef.get();
    const snapshotMateri = await materiRef.get();

    const refMateri = await db.collection('materi')
    const snapRefMateri = await refMateri.get()

    snapRefMateri.forEach(item => {
      dataMateri.push({ id_materi: item.id, ...item.data() })
    })

    if (snapshotTryOut.exists) {
      data = { id: snapshotTryOut.id, ...snapshotTryOut.data() }
      data['materi'] = [];

      snapshotMateri.forEach((hasil) => {
        for (let i = 0; i < dataMateri.length; i++) {
          if (hasil.id === dataMateri[i].id_materi) {
            data['materi'].push({ ...dataMateri[i], ...hasil.data() })
          }
        }
      })
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


  async addList(data) {
    let isSuccess = false
    await db.collection('list_tryout').doc().set(data).then(function () {
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

  async updateList(data, id) {
    let isSuccess = false
    await db.collection('list_tryout').doc(id).update(data).then(function () {
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

  async deleteList(id) {
    let isSuccess = false
    await db.collection('list_tryout').doc(id).delete().then(function () {
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

  async addSoal(data, id_list) {
    let isSuccess = false

    const soal = data.soal
    const dataDetail = {
      id_materi: data.id_materi,
      jumlah_soal: data.jumlah_soal,
      waktu_mengerjakan: data.waktu_mengerjakan,
      jadwal: data.jadwal
    }

    const ref = await db.collection('list_tryout').doc(id_list).collection('materi').doc(dataDetail.id_materi)
    const snapshot = await ref.get()

    if (snapshot.exists) {
      isSuccess = false
    } else {
      await db.collection('list_tryout').doc(id_list).collection('materi').doc(dataDetail.id_materi).set(dataDetail).then(function () {
        isSuccess = true
      }).catch(err => {
        isSuccess = false
      });

      soal.forEach(async hasil => {
        await db.collection('list_tryout').doc(id_list).collection('materi').doc(dataDetail.id_materi).collection('soal').doc().set(hasil).then(function () {
          isSuccess = true
        }).catch(err => {
          isSuccess = false
        });
      })
    }

    return isSuccess
  }

  async getListSoalTryOut(kategori, id, id_materi) {
    let data = null;

    const refTryout = await db.collection("list_tryout").doc(id);
    const snapTryout = await refTryout.get();
    const refMateri = await db.collection("list_tryout").doc(id).collection('materi').doc(id_materi);
    const snapMateri = await refMateri.get();
    const refSoal = await db.collection("list_tryout").doc(id).collection('materi').doc(id_materi).collection('soal');
    const snapSoal = await refSoal.get();

    const referenceMateri = await db.collection('materi').doc(id_materi)
    const snapRefMateri = await referenceMateri.get()

    if (snapTryout.exists) {
      let arrSoal = []
      snapSoal.forEach(hasil => {
        arrSoal.push({
          ...hasil.data()
        })
      })
      data = {
        id: snapTryout.id,
        materi: { ...snapRefMateri.data(), ...snapMateri.data() },
        soal: arrSoal,
        ...snapTryout.data()
      }
    }

    if (data !== null) {
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

  async updateSoal(data, id, id_materi) {
    let isSuccess = false

    const soal = data.soal
    const dataDetail = {
      id_materi: data.id_materi,
      jumlah_soal: data.jumlah_soal,
      waktu_mengerjakan: data.waktu_mengerjakan,
      jadwal: data.jadwal
    }

    const ref = await db.collection('list_tryout').doc(id).collection('materi').doc(dataDetail.id_materi)
    const snapshot = await ref.get()

    if (snapshot.exists) {
      await db.collection('list_tryout').doc(id).collection('materi').doc(dataDetail.id_materi).update(dataDetail).then(function () {
        isSuccess = true
      }).catch(err => {
        isSuccess = false
      });

      await db.collection('list_tryout').doc(id).collection('materi').doc(dataDetail.id_materi).collection('soal').listDocuments().then(val => {
        val.map((val) => {
          val.delete()
        })
      })

      soal.forEach(async hasil => {
        await db.collection('list_tryout').doc(id).collection('materi').doc(dataDetail.id_materi).collection('soal').doc().set(hasil).then(function () {
          isSuccess = true
        }).catch(err => {
          isSuccess = false
        });
      })
    }

    return isSuccess
  }

  async deleteDetailMateri(id, id_materi) {
    let isSuccess = false
    await db.collection('list_tryout').doc(id).collection('materi').doc(id_materi).delete().then(function () {
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

  async getListJadwalTryOut() {
    let data = [];

    const ref = await db.collection("list_tryout");
    const snapshot = await ref.get();

    snapshot.forEach(async (hasil) => {
      try {
        let refMateri = await db.collection("list_tryout").doc(hasil.id).collection("materi")
        let snapMateri = await refMateri.get()

        snapMateri.forEach(item => {
          data.push({
            id: hasil.id,
            materi: { ...item.data() },
            ...hasil.data(),
          })
        })
      } catch (error) {
        console.error("Error fetching data:", error);
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
}

module.exports = ModelTryout;