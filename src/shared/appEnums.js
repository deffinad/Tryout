
const BASE_URL = 'https://tryout-server.vercel.app/tryout';

// API MATERI
const GET_LIST_MATERI = BASE_URL + '/materi/$kategori'; // kategori: utbk/poltekes/kedinasan
const GET_DETAIL_MATERI = BASE_URL + '/materi/$kategori/$id';
const ADD_MATERI = BASE_URL + '/materi';
const UPDATE_MATERI = BASE_URL + '/materi/$id';
const DELETE_MATERI = BASE_URL + '/materi/$id';

export const API = {
    BASE_URL,
    GET_LIST_MATERI,
    GET_DETAIL_MATERI,
    ADD_MATERI,
    UPDATE_MATERI,
    DELETE_MATERI
}