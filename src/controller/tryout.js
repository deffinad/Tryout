const { validationResult } = require("express-validator");
const { loggedInUsers } = require("../config/session");
const ModelTryout = require("../model/ModelTryout");

const tryoutModel = new ModelTryout();

const onGetListTryOut = async (req, res) => {
    const { kategori } = req.params;

    try {
        const result = await tryoutModel.getListTryOut(kategori);

        if (result.isTrue) {
            res.status(200).json({
                status: 200,
                messages: "Data Try Out Ditemukan",
                result: result.data,
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Tryout Tidak Ditemukan",
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

const onGetDetailTryout = async (req, res) => {
    const { kategori, id } = req.params;
    try {
        const result = await tryoutModel.getDetailTryOut(kategori, id);

        if (result.isTrue) {
            res.status(200).json({
                status: 200,
                messages: "Data Try Out Ditemukan",
                result: result.data,
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Tryout Tidak Ditemukan",
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

const onAddList = async (req, res) => {
    const errors = validationResult(req)
    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const result = await tryoutModel.addList(req.body);
            if (result) {
                res.status(200).json({
                    status: 200,
                    messages: "Data Tryout Berhasil Ditambahkan",
                    result: req.body,
                });
            } else {
                res.status(403).json({
                    status: 403,
                    messages: "Data Tryout Gagal Ditambahkan",
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

const onUpdateList = async (req, res) => {
    const { id } = req.params

    const errors = validationResult(req)
    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const result = await tryoutModel.updateList(req.body, id);
            if (result) {
                res.status(200).json({
                    status: 200,
                    messages: "Data Tryout Berhasil Diubah",
                    result: req.body,
                });
            } else {
                res.status(403).json({
                    status: 403,
                    messages: "Data Tryout Gagal Diubah",
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

const onDeleteList = async (req, res) => {
    const { id } = req.params

    try {
        const result = await tryoutModel.deleteList(id);
        if (result) {
            res.status(200).json({
                status: 200,
                messages: "Data Tryout Berhasil Dihapus",
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Tryout Gagal Dihapus",
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

const onAddSoal = async (req, res) => {
    const errors = validationResult(req)
    const id_list = req.params.id
    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const result = await tryoutModel.addSoal(req.body, id_list);
            if (result) {
                res.status(200).json({
                    status: 200,
                    messages: "Data Soal Tryout Berhasil Ditambahkan",
                    result: req.body,
                });
            } else {
                res.status(403).json({
                    status: 403,
                    messages: "Data Soal Tryout Gagal Ditambahkan",
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

const onGetListSoalTryOut = async (req, res) => {
    const { kategori, id, id_materi } = req.params;

    try {
        const result = await tryoutModel.getListSoalTryOut(kategori, id, id_materi);
        if (result.isTrue) {
            res.status(200).json({
                status: 200,
                messages: "Data Try Out Ditemukan",
                result: result.data,
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Tryout Tidak Ditemukan",
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

const onUpdateSoal = async (req, res) => {
    const { kategori, id, id_materi } = req.params
    const errors = validationResult(req)
    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const result = await tryoutModel.updateSoal(req.body, id, id_materi);
            if (result) {
                res.status(200).json({
                    status: 200,
                    messages: "Data Soal Tryout Berhasil Diubah",
                    result: req.body,
                });
            } else {
                res.status(403).json({
                    status: 403,
                    messages: "Data Soal Tryout Gagal Diubah",
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

const onDeleteDetailMateri = async (req, res) => {
    const { kategori, id, id_materi } = req.params

    try {
        const result = await tryoutModel.deleteDetailMateri(id, id_materi);
        if (result) {
            res.status(200).json({
                status: 200,
                messages: "Data Materi Tryout Berhasil Dihapus",
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: "Data Materi Tryout Gagal Dihapus",
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


module.exports = { onGetListTryOut, onGetDetailTryout, onAddList, onUpdateList, onDeleteList, onAddSoal, onGetListSoalTryOut, onUpdateSoal, onDeleteDetailMateri };