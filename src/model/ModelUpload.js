const { storage } = require("../config/firebase");
const uuid = require('uuid')
const { getDownloadURL } = require("firebase-admin/storage")

class ModelUpload {
    async uploadFile(type, file) {
        let data = {
            isTrue: true,
            data: {
                name: '',
                type: '',
            },
        }

        try {
            const destination = `${type}/${file.originalname}`
            await storage.upload(file.path, {
                destination: destination,
                metadata: {
                    metadata: { firebaseStorageDownloadTokens: uuid },
                    contentType: file.mimetype
                }
            })

            const fileRef = storage.file(destination);
            const downloadURL = await getDownloadURL(fileRef);
            data = {
                isTrue: true,
                data: {
                    name: file.originalname,
                    type: file.mimetype,
                    url: downloadURL
                },
            };
        } catch (error) {
            data = {
                isTrue: false,
                data: {}
            };
        }

        return data
    }
}

module.exports = ModelUpload;