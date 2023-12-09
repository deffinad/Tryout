var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const { login } = require("../controller/auth.js");

var router = express.Router();
router.use(bodyParser.json());

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

router.use(cors(corsOptions));

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

/* GET home page. */
router.get("/", function (req, res, next) {
    return res
        .status(200)
        .json({ message: "Welcome to Express API Tryout" });
});

router.post("/login", login);
// router.get("/ruas-detail/:id", getRuasJalanById);
// router.get("/ruas", postData);


module.exports = router;