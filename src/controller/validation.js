const { check } = require("express-validator");

var materiValidation = [
    check('nama', 'Nama Wajib Diisi').exists(),
    check('kategori', 'Kategori Wajib Diisi').exists()
]

var listValidation = [
    check('nama', 'Nama Wajib Diisi').exists(),
    check('kategori', 'Kategori Wajib Diisi').exists()
]

var soalTryoutValidation = [
    check('id_materi', 'Id Materi Wajib Diisi').exists(),
    check('jumlah_soal', 'Jumlah Soal Wajib Diisi').exists(),
    check('waktu_mengerjakan', 'Waktu Mengerjakan Wajib Diisi').exists(),
    check('soal', 'Soal Wajib Diisi').exists(),
]


module.exports = { materiValidation, listValidation, soalTryoutValidation };