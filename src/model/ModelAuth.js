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
        dataUser: data,
      };
    } else {
      return {
        isTrue: false,
      };
    }
  }
}

module.exports = ModelAuth;