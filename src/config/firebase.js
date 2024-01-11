var admin = require("firebase-admin");
var serviceAccount = require("./tryout-3a1d7-firebase-adminsdk-6bbgt-baa1fe063c.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://tryout-3a1d7.appspot.com'
});

var db = admin.firestore();
var storage = admin.storage().bucket()
var timestamp = admin.firestore.Timestamp

module.exports = { db, timestamp, storage };