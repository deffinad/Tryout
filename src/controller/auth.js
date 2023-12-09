const { v4: uuidv4 } = require("uuid");

const ModelAuth = require("../model/ModelAuth");

const authModel = new ModelAuth();

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await authModel.login(username, password);

          if (result.isTrue) {
            res.status(200).json({
              status: 200,
              messages: "Login Berhasil",
              data: result.dataUser,
            });
          } else {
            res.status(403).json({
              status: 403,
              messages: "Username/Password Salah",
            });
          }
    } catch (err) {
        res.status(400).json({
            status: 400,
            messages:
                "Server tidak memahami sintak permintaan dari klien",
        });
    }
};



module.exports = { login };