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
      return {
        isTrue: true,
        dataUser: {
          ...data
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

  async getDashboardUser(token) {
    const refTransaksi = await db.collection("transaksi")
    const snapTransaksi = await refTransaksi.get()
    let data = []
    let totalDikerjakan = 0
    let totalNilai = 0
    let nilaiRata = 0
    let dataTryout = []

    for (const hasil of snapTransaksi.docs) {
      if (hasil.data().token === token && hasil.data().status === 'berhasil') {
        const refProduk = await db.collection("produk").doc(hasil.data().id_produk)
        const snapProduk = await refProduk.get()

        for (const value of snapProduk.data().id_tryout) {
          const refTryout = await db.collection('list_tryout').doc(value).collection('materi')
          const snapTryout = await refTryout.get()

          let dataMateri = []
          for (const item of snapTryout.docs) {
            dataMateri.push({ ...item.data() })
          }

          data.push({
            id_tryout: value,
            id_transaksi: hasil.id,
            materi: [
              ...dataMateri
            ]
          })
        }
      }
    }

    for (const hasil of data) {
      let countMateriDikerjakan = 0
      const refJawaban = await db.collection('transaksi').doc(hasil.id_transaksi).collection('jawaban')
      const snapJawaban = await refJawaban.get()

      for (const value of hasil.materi) {
        for (const item of snapJawaban.docs) {
          if (item.data().id_transaksi === hasil.id_transaksi && item.data().id_materi === value.id_materi && hasil.id_tryout === item.data().id_tryout) {
            countMateriDikerjakan = countMateriDikerjakan + 1
            let check = dataTryout.some(x => x.id_tryout === item.data().id_tryout)
            if (check) {
              let index = dataTryout.findIndex(x => x.id_tryout === item.data().id_tryout)
              dataTryout[index].materi.push({
                id_materi: item.data().id_materi,
                nilai: item.data().nilai
              })
            } else {
              dataTryout.push({
                id_tryout: item.data().id_tryout,
                materi: [{
                  id_materi: item.data().id_materi,
                  nilai: item.data().nilai
                }]
              })
            }
          }
        }
      }
      if (countMateriDikerjakan === hasil.materi.length) {
        totalDikerjakan = totalDikerjakan + 1
      }
    }

    for (const value of dataTryout) {
      let average = 0
      let sum = 0
      for (const item of value.materi) {
        sum = sum + item.nilai
      }
      average = sum / value.materi.length
      totalNilai = totalNilai + average
    }

    nilaiRata = totalNilai / dataTryout.length

    const ranking = await this.getRanking(token)

    if (data.length > 0) {
      return {
        isTrue: true,
        data: {
          total: data.length,
          dikerjakan: totalDikerjakan,
          belum_dikerjakan: data.length - totalDikerjakan,
          nilai_rata: Number.isNaN(nilaiRata) ? 0 : nilaiRata,
          ranking: ranking
        },
      };
    } else {
      return {
        isTrue: false,
        data: {
          total: 0,
          dikerjakan: 0,
          belum_dikerjakan: 0,
          nilaiRata: 0,
          ranking: 0
        },
      };
    }
  }

  async getRanking(token) {
    const refTransaksi = await db.collection("transaksi")
    const snapTransaksi = await refTransaksi.get()
    let data = []
    let dataUser = []

    for (const hasil of snapTransaksi.docs) {
      if (hasil.data().status === 'berhasil') {
        const refProduk = await db.collection("produk").doc(hasil.data().id_produk)
        const snapProduk = await refProduk.get()

        for (const value of snapProduk.data().id_tryout) {
          const refTryout = await db.collection('list_tryout').doc(value).collection('materi')
          const snapTryout = await refTryout.get()

          let dataMateri = []
          for (const item of snapTryout.docs) {
            dataMateri.push({ ...item.data() })
          }

          let check = data.some(x => x.token === hasil.data().token)
          if (check) {
            let index = data.findIndex(x => x.token === hasil.data().token)
            data[index].tryout.push({
              id_tryout: value,
              id_transaksi: hasil.id,
              materi: [
                ...dataMateri
              ]
            })
          } else {
            data.push({
              token: hasil.data().token,
              tryout: [{
                id_tryout: value,
                id_transaksi: hasil.id,
                materi: [
                  ...dataMateri
                ]
              }]
            })
          }
        }
      }
    }

    for (const hasil of data) {
      let totalDikerjakan = 0
      let dataTryout = []
      let totalNilai = 0
      let nilaiRata = 0

      for (const hasilTryout of hasil.tryout) {
        let countMateriDikerjakan = 0
        const refJawaban = await db.collection('transaksi').doc(hasilTryout.id_transaksi).collection('jawaban')
        const snapJawaban = await refJawaban.get()

        for (const value of hasilTryout.materi) {
          for (const item of snapJawaban.docs) {
            if (item.data().id_transaksi === hasilTryout.id_transaksi && item.data().id_materi === value.id_materi && hasilTryout.id_tryout === item.data().id_tryout) {
              countMateriDikerjakan = countMateriDikerjakan + 1
              let check = dataTryout.some(x => x.id_tryout === item.data().id_tryout)
              if (check) {
                let index = dataTryout.findIndex(x => x.id_tryout === item.data().id_tryout)
                dataTryout[index].materi.push({
                  id_materi: item.data().id_materi,
                  nilai: item.data().nilai
                })
              } else {
                dataTryout.push({
                  id_tryout: item.data().id_tryout,
                  materi: [{
                    id_materi: item.data().id_materi,
                    nilai: item.data().nilai
                  }]
                })
              }
            }
          }
        }
        if (countMateriDikerjakan === hasilTryout.materi.length) {
          totalDikerjakan = totalDikerjakan + 1
        }
      }

      for (const value of dataTryout) {
        let average = 0
        let sum = 0
        for (const item of value.materi) {
          sum = sum + item.nilai
        }
        average = sum / value.materi.length
        totalNilai = totalNilai + average
      }

      nilaiRata = totalNilai / dataTryout.length
      dataUser.push({
        token: hasil.token,
        nilaiRata: Number.isNaN(nilaiRata) ? 0 : nilaiRata
      })
    }

    const ranking = dataUser.sort((a, b) => b.nilaiRata - a.nilaiRata)
    const indexRanking = ranking.findIndex(x => x.token === token)
    return indexRanking + 1
  }
}

module.exports = ModelAuth;