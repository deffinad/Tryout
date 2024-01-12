import { API } from "../../appEnums";

export const getListTryoutApi = async (kategori) => {
    try {
        const response = await fetch(API.GET_LIST_TRYOUT.replace('$kategori', kategori), {
            method: 'GET',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
            },
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const getDetailTryoutApi = async (id, kategori) => {
    try {
        const response = await fetch(API.GET_DETAIL_TRYOUT.replace('$kategori', kategori).replace('$id', id), {
            method: 'GET',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
            },
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const addTryoutApi = async (data) => {
    try {
        const response = await fetch(API.ADD_TRYOUT, {
            method: 'POST',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const updateTryoutApi = async (id, data) => {
    try {
        const response = await fetch(API.UPDATE_TRYOUT.replace('$id', id), {
            method: 'PUT',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const deleteTryoutApi = async (id) => {
    try {
        const response = await fetch(API.DELETE_TRYOUT.replace('$id', id), {
            method: 'DELETE',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
            },
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const deleteDetailTryoutApi = async (jenis, id, id_materi) => {
    try {
        const response = await fetch(API.DELETE_DETAIL_TRYOUT.replace('$id', id).replace('$jenis', jenis).replace('$id_materi', id_materi), {
            method: 'DELETE',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
            },
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const addSoalApi = async (data, kategori, id) => {
    try {
        const response = await fetch(API.ADD_SOAL.replace('$kategori', kategori).replace('$id', id), {
            method: 'POST',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const updateSoalApi = async (data, kategori, id) => {
    try {
        const response = await fetch(API.UPDATE_SOAL.replace('$kategori', kategori).replace('$id', id).replace('$id_materi', data.id_materi), {
            method: 'PUT',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const getDetailSoalApi = async (id, kategori, id_materi) => {
    try {
        const response = await fetch(API.GET_DETAIL_SOAL.replace('$kategori', kategori).replace('$id', id).replace('$id_materi', id_materi), {
            method: 'GET',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ'
            }
        })

        return response.json();
    } catch (error) {
        return error;
    }
}

export const uploadFileApi = async (file, type) => {
    try {
        var formdata = new FormData();
        formdata.append("file", file);

        const response = await fetch(API.UPLOAD_FILE.replace('$type', type), {
            method: 'POST',
            headers: {
                'Authorization': 'zitPy6simHZxUDFOXiTZ',
            },
            body: formdata
        })

        return response.json();
    } catch (error) {
        return error;
    }
}
