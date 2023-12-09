var { db } = require("../config/firebase");

class ModelAuth {
  async login(username, password) {
    let data = null;

    const ref = await db.collection("users");
    const snapshot = await ref.get();

    snapshot.forEach((hasil) => {
      if (hasil.data().username == username && hasil.data().password == password) {
        data = hasil.data()
      }
    });

    if (data != null) {
      return {
        isTrue: true,
        dataUser: data,
      };
    } else {
      return {
        isTrue: false,
      };
    }
  }

//   async cekEmail(email) {
//     const ref = await db.collection("users").doc(email);
//     const doc = await ref.get();

//     if (!doc.exists) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   async getUser() {
//     const allData = [];

//     const ref = await db.collection("users");
//     const snapshot = await ref.get();

//     snapshot.forEach((hasil) => {
//       allData.push({ [hasil.id]: hasil.data() });
//     });

//     return allData;
//   }

}

module.exports = ModelAuth;