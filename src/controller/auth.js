const { v4: uuidv4 } = require("uuid");
const { loggedInUsers } = require("../config/session")
const ModelAuth = require("../model/ModelAuth");

const authModel = new ModelAuth();


const onCheckToken = async (token) => {
  try {
    const result = await authModel.checkToken(token);
    return result
  } catch (error) {
    return {
      isTrue: false
    }
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await authModel.login(username, password);

    if (result.isTrue) {
      loggedInUsers.add(result.dataUser.token);
      res.status(200).json({
        status: 200,
        messages: "Login Berhasil",
        result: result.dataUser,
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

const logout = async (req, res) => {
  const authHeader = req.headers.authorization

  loggedInUsers.delete(authHeader);
  res.json({ message: 'Logout Berhasil' });

};



module.exports = { login, onCheckToken, logout };