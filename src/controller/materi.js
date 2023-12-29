const { validationResult } = require("express-validator");
const ModelMateri = require("../model/ModelMateri");

const materiModel = new ModelMateri();

const onGetListMateri = async (req, res) => {
    const { kategori } = req.params;

    try {
        const result = await materiModel.getListMateri(kategori);

        if (result.isTrue) {
            res.status(200).json({
                status: 200,
                messages: "Data Materi Ditemukan",
                result: result.data,
            });
        } else {
            res.status(200).json({
                status: 200,
                messages: "Data Materi Tidak Ditemukan",
                result: []
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


const onGetDetailMateri = async (req, res) => {
    const { kategori, id } = req.params;
    try {
        const result = await materiModel.getDetailMateri(id);

        if (result.isTrue) {
            res.status(200).json({
                status: 200,
                messages: "Data Materi Ditemukan",
                result: result.data,
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Materi Tidak Ditemukan",
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

const onAddMateri = async (req, res) => {
    const errors = validationResult(req)
    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const result = await materiModel.addMateri(req.body);
            if (result) {
                res.status(200).json({
                    status: 200,
                    messages: "Data Materi Berhasil Ditambahkan",
                    result: req.body,
                });
            } else {
                res.status(403).json({
                    status: 403,
                    messages: "Data Materi Gagal Ditambahkan",
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

const onUpdateMateri = async (req, res) => {
    const { id } = req.params

    const errors = validationResult(req)
    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const result = await materiModel.updateMateri(req.body, id);
            if (result) {
                res.status(200).json({
                    status: 200,
                    messages: "Data Materi Berhasil Diubah",
                    result: req.body,
                });
            } else {
                res.status(403).json({
                    status: 403,
                    messages: "Data Materi Gagal Diubah",
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

const onDeleteMateri = async (req, res) => {
    const { id } = req.params

    try {
        const result = await materiModel.deleteMateri(id);
        if (result) {
            res.status(200).json({
                status: 200,
                messages: "Data Materi Berhasil Dihapus",
                result: req.body,
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Materi Gagal Dihapus",
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

module.exports = { onGetListMateri, onGetDetailMateri, onAddMateri, onUpdateMateri, onDeleteMateri };