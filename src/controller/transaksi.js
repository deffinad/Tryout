const { validationResult } = require("express-validator");
const { loggedInUsers } = require("../config/session");
const ModelTransaksi = require("../model/ModelTransaksi");

const transaksiModel = new ModelTransaksi();

const onGetListTransaksi = async (req, res) => {
    const token = req.headers.authorization
    try {
        const result = await transaksiModel.getListTransaksi(token);

        if (result.isTrue) {
            res.status(200).json({
                status: 200,
                messages: "Data Transaksi Ditemukan",
                result: result.data,
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Transaksi Tidak Ditemukan",
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

const onGetDetailTransaksi = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await transaksiModel.getDetailTransaksi(id);

        if (result.isTrue) {
            res.status(200).json({
                status: 200,
                messages: "Data Transaksi Ditemukan",
                result: result.data,
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Transaksi Tidak Ditemukan",
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

const onAddTransaksi = async (req, res) => {
    const errors = validationResult(req)
    const token = req.headers.authorization
    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const result = await transaksiModel.addTransaksi({ token: token, ...req.body, status: "menunggu pembayaran" });
            if (result) {
                res.status(200).json({
                    status: 200,
                    messages: "Data Transaksi Berhasil Ditambahkan",
                    result: req.body,
                });
            } else {
                res.status(403).json({
                    status: 403,
                    messages: "Data Transaksi Gagal Ditambahkan",
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

const onDeleteTransaksi = async (req, res) => {
    const { id } = req.params

    try {
        const result = await transaksiModel.deleteTransaksi(id);
        if (result) {
            res.status(200).json({
                status: 200,
                messages: "Data Transaksi Berhasil Dihapus",
                result: req.body,
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Transaksi Gagal Dihapus",
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

const onRequestPaymentToken = async (req, res) => {
    const errors = validationResult(req)
    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const  result = await transaksiModel.requestPaymentToken(req.body);
            if (result.isSuccess) {
                res.status(201).json({
                    status: 201,
                    messages: "Permintaan token pembayaran berhasil diterima",
                    result: result.data,
                });
            } else {
                res.status(401).json({
                    status: 401,
                    messages: "Gagal membuat token, Harap periksa client key atau server key anda",
                    result: result.data
                })
            }
        }
    } catch (error) {
        res.status(400).json({
            status: 400,
            messages:
                "Server tidak memahami sintak permintaan dari klien",
        });
    }
}


module.exports = { onGetListTransaksi, onGetDetailTransaksi, onAddTransaksi, onDeleteTransaksi, onRequestPaymentToken };