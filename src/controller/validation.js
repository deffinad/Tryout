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

var transaksiReqTokenValidation = [
    body('gross_amount').exists().withMessage('Gross Amount Wajib Diisi'),
    body('customer_name').exists().withMessage('First Name Wajib Diisi'),
    body('phone').exists().withMessage('Phone Wajib Diisi'),
    body('id_produk').exists().withMessage('Id Produk Wajib Diisi'),
]

var registerValidation = [
    check('asal_kota', 'Asal Kota Wajib Diisi').exists(),
    check('asal_sekolah', 'Kategori Wajib Diisi').exists(),
    check('avatar', 'Avatar Wajib Diisi').exists(),
    check('jenis_kelamin', 'Jenis Kelamin Wajib Diisi').exists(),
    check('nama', 'Nama Wajib Diisi').exists(),
    check('password', 'Password Wajib Diisi').exists(),
    check('provinsi', 'Provinsi Wajib Diisi').exists(),
    check('role', 'Role Wajib Diisi').exists(),
    check('tgl_lahir', 'Tanggal Lahir Wajib Diisi').exists(),
    check('username', 'Username Wajib Diisi').exists(),
]

module.exports = { materiValidation, listValidation, soalTryoutValidation, produkValidation, transaksiValidation, transaksiReqTokenValidation, registerValidation };