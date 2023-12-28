const { validationResult } = require("express-validator");
const { loggedInUsers } = require("../config/session");
const ModelProduk = require("../model/ModelProduk");

const produkModel = new ModelProduk();

const onGetListProduk = async (req, res) => {
    const { kategori } = req.params
    try {
        const result = await produkModel.getListProduk(kategori);

        if (result.isTrue) {
            res.status(200).json({
                status: 200,
                messages: "Data Produk Ditemukan",
                result: result.data,
            });
        } else {
            res.status(200).json({
                status: 200,
                messages: "Data Produk Tidak Ditemukan",
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

const onGetDetailProduk = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await produkModel.getDetailProduk(id);

        if (result.isTrue) {
            res.status(200).json({
                status: 200,
                messages: "Data Produk Ditemukan",
                result: result.data,
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Produk Tidak Ditemukan",
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

const onAddProduk = async (req, res) => {
    const errors = validationResult(req)
    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const result = await produkModel.addProduk(req.body);
            if (result) {
                res.status(200).json({
                    status: 200,
                    messages: "Data Produk Berhasil Ditambahkan",
                    result: req.body,
                });
            } else {
                res.status(403).json({
                    status: 403,
                    messages: "Data Produk Gagal Ditambahkan",
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

const onUpdateProduk = async (req, res) => {
    const { id } = req.params

    const errors = validationResult(req)
    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const result = await produkModel.updateProduk(req.body, id);
            if (result) {
                res.status(200).json({
                    status: 200,
                    messages: "Data Produk Berhasil Diubah",
                    result: req.body,
                });
            } else {
                res.status(403).json({
                    status: 403,
                    messages: "Data Produk Gagal Diubah",
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

const onDeleteProduk = async (req, res) => {
    const { id } = req.params

    try {
        const result = await produkModel.deleteProduk(id);
        if (result) {
            res.status(200).json({
                status: 200,
                messages: "Data Produk Berhasil Dihapus",
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Produk Gagal Dihapus",
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

module.exports = { onGetListProduk, onGetDetailProduk, onAddProduk, onUpdateProduk, onDeleteProduk };