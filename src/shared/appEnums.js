export const stringToRupiah = (bilangan) => {
    var strBilangan = bilangan.toString();
    var number_string = strBilangan.replace('.', ''),
        sisa = number_string.length % 3,
        rupiah = number_string.substring(0, sisa),
        ribuan = number_string.substring(sisa).match(/\d{3}/g);

    if (ribuan) {
        const separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    return rupiah;
}

const BASE_URL = 'https://tryout-server.vercel.app/tryout';
const ID_MERCHANT = 'G559497554';
const CLIENT_KEY = 'SB-Mid-client-hl3Uit2KuqzsgBMN';
const SERVER_KEY = 'SB-Mid-server-Ic6W0Kwt2d8GgpQtvfzpLq1q';

// API AUTH
const AUTH_LOGIN = BASE_URL + '/login';
const AUTH_REGISTER = BASE_URL + '/user';
const UPDATE_PROFILE_USER = BASE_URL + '/user/$id';

// API MATERI
const GET_LIST_MATERI = BASE_URL + '/materi/$kategori'; // kategori: utbk/poltekes/kedinasan
const GET_DETAIL_MATERI = BASE_URL + '/materi/$kategori/$id';
const ADD_MATERI = BASE_URL + '/materi';
const UPDATE_MATERI = BASE_URL + '/materi/$id';
const DELETE_MATERI = BASE_URL + '/materi/$id';

// API PRODUK
const GET_LIST_PRODUK = BASE_URL + '/produk/$kategori';
const GET_DETAIL_PRODUK = BASE_URL + '/produk/$id';
const ADD_PRODUK = BASE_URL + '/produk';
const UPDATE_PRODUK = BASE_URL + '/produk/$id';
const DELETE_PRODUK = BASE_URL + '/produk/$id';

// API TRYOUT
const GET_LIST_TRYOUT = BASE_URL + '/list/$kategori';
const GET_DETAIL_TRYOUT = BASE_URL + '/list/$kategori/$id';
const GET_LIST_SOAL_TRYOUT = BASE_URL + '/list/$kategori/$id/soal/$id_materi';
const GET_LIST_MY_TRYOUT = BASE_URL + '/my-to';
const GET_DETAIL_MY_TRYOUT = BASE_URL + '/my-to/$id';
const GET_MY_TRYOUT_ANSWER = BASE_URL + '/my-to/jawaban/$id_transaksi/$id_tryout/$id_materi';

// API TRANSAKSI (MY TO)
const GET_LIST_TRANSAKSI = BASE_URL + '/transaksi/$kategori';
const UPDATE_TRANSAKSI = BASE_URL + '/transaksi/$id';
const GET_DETAIL_TRANSAKSI = BASE_URL + '/transaksi/detail/$id';
const ADD_TRANSAKSI = BASE_URL + '/transaksi';
const ADD_ANSWER = BASE_URL + '/jawab';

// API PAYMENT
const GET_TOKEN_SNAP = BASE_URL + '/transaksi/request/token';
const GET_STATUS_PAYMENT = BASE_URL + '/transaksi/status/$order_id';

export const API = {
    ID_MERCHANT,
    CLIENT_KEY,
    SERVER_KEY,
    BASE_URL,
    AUTH_LOGIN,
    AUTH_REGISTER,
    UPDATE_PROFILE_USER,
    GET_LIST_MATERI,
    GET_DETAIL_MATERI,
    ADD_MATERI,
    UPDATE_MATERI,
    DELETE_MATERI,
    GET_LIST_PRODUK,
    GET_DETAIL_PRODUK,
    ADD_PRODUK,
    UPDATE_PRODUK,
    DELETE_PRODUK,
    GET_LIST_TRYOUT,
    GET_DETAIL_TRYOUT,
    GET_LIST_SOAL_TRYOUT,
    GET_LIST_MY_TRYOUT,
    GET_DETAIL_MY_TRYOUT,
    GET_MY_TRYOUT_ANSWER,
    GET_TOKEN_SNAP,
    GET_STATUS_PAYMENT,
    GET_LIST_TRANSAKSI,
    GET_DETAIL_TRANSAKSI,
    ADD_TRANSAKSI,
    UPDATE_TRANSAKSI,
    ADD_ANSWER
}