const { v4: uuidv4 } = require("uuid");
const { loggedInUsers } = require("../config/session")
const ModelAuth = require("../model/ModelAuth");
const { validationResult } = require("express-validator");

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

const onGetListUser = async (req, res) => {
  try {
    const result = await authModel.getListUser();

    if (result.isTrue) {
      res.status(200).json({
        status: 200,
        messages: "Data User Ditemukan",
        result: result.data,
      });
    } else {
      res.status(403).json({
        status: 403,
        messages: "Data User Tidak Ditemukan",
        result: result.data
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

const onGetDetailUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await authModel.getDetailUser(id);

    if (result.isTrue) {
      res.status(200).json({
        status: 200,
        messages: "Data User Ditemukan",
        result: result.data,
      });
    } else {
      res.status(403).json({
        status: 403,
        messages: "Data User Tidak Ditemukan",
        result: result.data
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

const onAddUser = async (req, res) => {
  const errors = validationResult(req)
  try {
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      const result = await authModel.addUser(req.body);
      if (result.isSuccess) {
        res.status(200).json({
          status: 200,
          messages: "Data User Berhasil Ditambahkan",
          result: req.body,
        });
      } else {
        res.status(403).json({
          status: 403,
          messages: result.message,
          result: null
        });
      }

    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      messages:
        "Server tidak memahami sintak permintaan dari klien",
    });
  }
};

const onUpdateUser = async (req, res) => {
  const { id } = req.params

  const errors = validationResult(req)
  try {
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      const result = await authModel.updateUser(req.body, id);
      if (result) {
        res.status(200).json({
          status: 200,
          messages: "Data User Berhasil Diubah",
          result: req.body,
        });
      } else {
        res.status(403).json({
          status: 403,
          messages: "Data User Gagal Diubah",
          result: null
        });
      }

    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      messages:
        "Server tidak memahami sintak permintaan dari klien",
    });
  }
};

const onDeleteUser = async (req, res) => {
  const { id } = req.params

  try {
    const result = await authModel.deleteUser(id);
    if (result) {
      res.status(200).json({
        status: 200,
        messages: "Data User Berhasil Dihapus",
        result: req.body,
      });
    } else {
      res.status(403).json({
        status: 403,
        messages: "Data User Gagal Dihapus",
        result: null
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

const onGetDashboard = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const result = await authModel.getDashboardUser(token);

    if (result.isTrue) {
      res.status(200).json({
        status: 200,
        messages: "Data Dashboard Ditemukan",
        result: result.data,
      });
    } else {
      res.status(403).json({
        status: 403,
        messages: "Data Dashboard Tidak Ditemukan",
        result: result.data
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

module.exports = { login, onCheckToken, logout, onGetListUser, onGetDetailUser, onAddUser, onUpdateUser, onDeleteUser, onGetDashboard };