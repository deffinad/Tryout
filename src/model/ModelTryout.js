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

  async getDetailTryOut(kategori, id, token) {
    let data = null;
    let dataMateri = []

    const tryOutRef = await db.collection("list_tryout").doc(id);
    const materiRef = await db.collection("list_tryout").doc(id).collection('materi');
    const snapshotTryOut = await tryOutRef.get();
    const snapshotMateri = await materiRef.get();

    const refMateri = await db.collection('materi')
    const snapRefMateri = await refMateri.get()

    const refTransaksi = await db.collection('transaksi')
    const snapTransaksi = await refTransaksi.get()

    const refUser = await db.collection('users').doc(token)
    const snapUser = await refUser.get()

    const role = snapUser.data().role

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

      if (role === 'user') {
        for (const value of snapTransaksi.docs) {
          let dataTransaksi = value.data()
          if (dataTransaksi.token === token && dataTransaksi.status === 'berhasil') {
            const refJawaban = await db.collection('transaksi').doc(value.id).collection('jawaban')
            const snapJawaban = await refJawaban.get()

            for (let i = 0; i < data.materi.length; i++) {
              for (const item of snapJawaban.docs) {
                const dataJawaban = item.data()
                if (id === dataJawaban.id_tryout) {
                  if(data.materi[i].id_materi === dataJawaban.id_materi){
                    data.materi[i] = {
                      ...data.materi[i],
                      sudah_dikerjakan: true
                    }
                  }else{
                    data.materi[i] = {
                      ...data.materi[i],
                      sudah_dikerjakan: false
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      data = null
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
          id: hasil.id,
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

  async getListMyTryout(token) {
    let data = []
    const ref = await db.collection("transaksi");
    const snapshot = await ref.get();

    for (var value of snapshot.docs) {
      if (value.data().token === token && value.data().status === 'berhasil') {
        const refJawaban = await db.collection('transaksi').doc(value.id).collection('jawaban')
        const snapJawaban = await refJawaban.get()

        for (var valJawaban of snapJawaban.docs) {
          let check = data.some(item => item.id_tryout === valJawaban.data().id_tryout)

          const refTryout = await db.collection('list_tryout').doc(valJawaban.data().id_tryout)
          const snapTryout = await refTryout.get()

          const refMateri = await db.collection('materi').doc(valJawaban.data().id_materi)
          const snapMateri = await refMateri.get()

          if (check) {
            let index = data.findIndex(val => val.id_tryout === valJawaban.data().id_tryout)
            data[index].materi.push({
              id_materi: valJawaban.data().id_materi,
              ...snapMateri.data(),
              nilai: valJawaban.data().nilai
            })
            data[index].total_nilai = data[index].total_nilai + valJawaban.data().nilai
            data[index].rata_nilai = data[index].total_nilai / data[index].materi.length
          } else {
            data.push({
              id_tryout: valJawaban.data().id_tryout,
              id_transaksi: valJawaban.data().id_transaksi,
              ...snapTryout.data(),
              materi: [{
                id_materi: valJawaban.data().id_materi,
                ...snapMateri.data(),
                nilai: valJawaban.data().nilai
              }],
              total_nilai: valJawaban.data().nilai,
              rata_nilai: valJawaban.data().nilai / 1
            })
          }
        }
      }
    }

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

  async getDetailMyTryout(token, id_tryout) {
    let data = null
    const ref = await db.collection("transaksi");
    const snapshot = await ref.get();

    for (var value of snapshot.docs) {
      if (value.data().token === token && value.data().status === 'berhasil') {
        const refJawaban = await db.collection('transaksi').doc(value.id).collection('jawaban')
        const snapJawaban = await refJawaban.get()

        for (var valJawaban of snapJawaban.docs) {
          if (valJawaban.data().id_tryout === id_tryout) {
            const refTryout = await db.collection('list_tryout').doc(valJawaban.data().id_tryout)
            const snapTryout = await refTryout.get()

            const refMateri = await db.collection('materi').doc(valJawaban.data().id_materi)
            const snapMateri = await refMateri.get()

            if (data !== null) {
              data.materi.push({
                id_materi: valJawaban.data().id_materi,
                ...snapMateri.data(),
                nilai: valJawaban.data().nilai
              })
              data.total_nilai = data.total_nilai + valJawaban.data().nilai
              data.rata_nilai = data.total_nilai / data.materi.length
            } else {
              data = {
                id_tryout: valJawaban.data().id_tryout,
                id_transaksi: valJawaban.data().id_transaksi,
                ...snapTryout.data(),
                materi: [{
                  id_materi: valJawaban.data().id_materi,
                  ...snapMateri.data(),
                  nilai: valJawaban.data().nilai
                }],
                total_nilai: valJawaban.data().nilai,
                rata_nilai: valJawaban.data().nilai / 1
              }
            }
          }
        }
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

  async getMyTryoutAnswer(id_transaksi, id_tryout, id_materi, token) {
    let dataJawaban = null
    const ref = await db.collection('transaksi')
    const snap = await ref.get()

    for (const item of snap.docs) {
      if (item.data().token === token) {
        const refJawaban = await db.collection('transaksi').doc(item.id).collection('jawaban')
        const snapJawaban = await refJawaban.get()
        for (const value of snapJawaban.docs) {
          const data = value.data()
          if (data.id_transaksi === id_transaksi && data.id_tryout === id_tryout && data.id_materi === id_materi) {
            dataJawaban = {
              ...data
            }
          }
        }
      }
    }

    if (dataJawaban !== null) {
      return {
        isTrue: true,
        data: dataJawaban,
      };
    } else {
      return {
        isTrue: false,
        data: dataJawaban
      };
    }
  }
}

module.exports = ModelTryout;