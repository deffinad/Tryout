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

// API MATERI
const GET_LIST_MATERI = BASE_URL + '/materi/$kategori'; // kategori: utbk/poltekes/kedinasan
const GET_DETAIL_MATERI = BASE_URL + '/materi/$kategori/$id';
const ADD_MATERI = BASE_URL + '/materi';
const UPDATE_MATERI = BASE_URL + '/materi/$id';
const DELETE_MATERI = BASE_URL + '/materi/$id';

// API PRODUK
const GET_LIST_PRODUK = BASE_URL + '/produk/all';
const GET_DETAIL_PRODUK = BASE_URL + '/produk/$kategori/$id';
const ADD_PRODUK = BASE_URL + '/produk';
const UPDATE_PRODUK = BASE_URL + '/produk/$id';
const DELETE_PRODUK = BASE_URL + '/produk/$id';

// API TRYOUT
const GET_LIST_TRYOUT = BASE_URL + '/list/$kategori';
const GET_DETAIL_TRYOUT = BASE_URL + '/list/$kategori/$id';
const ADD_TRYOUT = BASE_URL + '/list';
const UPDATE_TRYOUT = BASE_URL + '/list/$id';
const DELETE_TRYOUT = BASE_URL + '/list/$id';
const ADD_SOAL = BASE_URL + '/list/$kategori/$id/soal';
const UPDATE_SOAL = BASE_URL + '/list/$kategori/$id/soal/$id_materi';
const GET_DETAIL_SOAL = BASE_URL + '/list/$kategori/$id/soal/$id_materi';
const DELETE_DETAIL_TRYOUT = BASE_URL + '/list/$jenis/$id/$id_materi';

//API PEMBELIAN
const GET_PEMBELIAN = BASE_URL + '/transaksi/all';

// API TRYOUT
const GET_LIST_USER = BASE_URL + '/user';
const GET_DETAIL_USER = BASE_URL + '/user/$id';
const UPDATE_USER = BASE_URL + '/user/$id';
const DELETE_USER = BASE_URL + '/user/$id';
const ADD_USER = BASE_URL + '/user';

export const API = {
    BASE_URL,
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
    ADD_TRYOUT,
    UPDATE_TRYOUT,
    DELETE_TRYOUT,
    ADD_SOAL,
    UPDATE_SOAL,
    GET_DETAIL_SOAL,
    DELETE_DETAIL_TRYOUT,
    GET_PEMBELIAN,
    GET_LIST_USER,
    GET_DETAIL_USER,
    UPDATE_USER,
    DELETE_USER,
    ADD_USER,
}