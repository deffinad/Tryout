var admin = require("firebase-admin");

var serviceAccount = require("./tryout-3a1d7-firebase-adminsdk-6bbgt-baa1fe063c.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();
var timestamp = admin.firestore.Timestamp

module.exports = { db, timestamp };