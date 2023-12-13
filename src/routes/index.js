var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const { login, onCheckToken, logout } = require("../controller/auth.js");
const { onGetListTryOut, onGetDetailTryout, onAddList, onUpdateList, onDeleteList, onAddMateriForList, onAddSoal, onGetListSoalTryOut, onUpdateSoal, onDeleteDetailMateri } = require("../controller/tryout.js");
const { loggedInUsers } = require("../config/session.js");
const { onGetListMateri, onGetDetailMateri, onAddMateri, onUpdateMateri, onDeleteMateri } = require("../controller/materi.js");
const { materiValidation, listValidation, soalTryoutValidation } = require("../controller/validation.js");

var router = express.Router();
router.use(bodyParser.json());

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

router.use(cors(corsOptions));

router.use((req, res, next) => {
    const authHeader = req.headers.authorization

    next();
    // if (loggedInUsers.has(authHeader) || req.path === '/login') {
    //     next();
    // } else {
    //     if (!authHeader) {
    //         return res.status(401).json({ error: 'Unauthorized - Missing Authorization header' });
    //     }

    //     const dataCheck = checkAuth(authHeader)
    //     dataCheck.then((result) => {
    //         if (result.isTrue == false) {
    //             return res.status(403).json({ error: 'Forbidden - Invalid token' });
    //         }else{
    //             return res.status(403).json({ error: 'Please Login' });
    //         }
    //     }).catch((error) => {
    //         return res.status(403).json({ error: 'Forbidden - Invalid token' });
    //     });
    // }
});

const checkAuth = async (token) => {
    return onCheckToken(token)
}
/* GET home page. */
router.get("/", function (req, res, next) {
    return res
        .status(200)
        .json({ message: "Welcome to Express API Tryout" });
});

router.post("/login", login);
router.get("/logout", logout);
//LIST
router.get("/list/:kategori", onGetListTryOut);
router.post("/list", listValidation, onAddList);
router.put("/list/:id", listValidation, onUpdateList);
router.delete("/list/:id", onDeleteList);
router.get("/list/:kategori/:id", onGetDetailTryout);
router.delete("/list/:kategori/:id/:id_materi", onDeleteDetailMateri);
router.get("/list/:kategori/:id/soal/:id_materi", onGetListSoalTryOut);
router.post("/list/:kategori/:id/soal", soalTryoutValidation, onAddSoal);
router.put("/list/:kategori/:id/soal/:id_materi",soalTryoutValidation, onUpdateSoal);

//MATERI
router.get("/materi/:kategori", onGetListMateri);
router.get("/materi/:kategori/:id", onGetDetailMateri);
router.post("/materi", materiValidation, onAddMateri);
router.put("/materi/:id", materiValidation, onUpdateMateri);
router.delete("/materi/:id", onDeleteMateri);


module.exports = router;