const { check, body } = require("express-validator");

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
    check('jadwal', 'Jadwal Tryout Wajib Diisi').exists(),
    check('soal', 'Soal Wajib Diisi').exists()
]

var produkValidation = [
    body('nama').exists().withMessage('Nama Paket Wajib Diisi'),
    body('kategori').exists().withMessage('Kategori Wajib Diisi'),
    body('jenis').exists().withMessage('Jenis Wajib Diisi'),
    body('id_tryout').exists().withMessage('ID Tryout Wajib Diisi').isArray().withMessage('Id Tryout Harus Menggunakan Array'),
    body('harga').exists().withMessage('Harga Wajib Diisi'),
    body('diskon').exists().withMessage('Diskon Wajib Diisi')
]

var transaksiValidation = [
    body('id_produk').exists().withMessage('ID Produk Wajib Diisi'),
    body('tanggal').exists().withMessage('Tanggal Wajib Diisi'),
]

module.exports = { materiValidation, listValidation, soalTryoutValidation, produkValidation, transaksiValidation };