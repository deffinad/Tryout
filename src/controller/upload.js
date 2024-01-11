const ModelUpload = require("../model/ModelUpload");

const uploadModel = new ModelUpload();

const onUploadFile = async (req, res) => {
    const { type } = req.params
    try {
        const result = await uploadModel.uploadFile(type, req.file);
        if (result.isTrue) {
            res.status(200).json({
                status: 200,
                messages: result.message,
                result: result.data,
            });
        } else {
            res.status(403).json({
                status: 403,
                messages: result.message,
                result: result.data
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            messages:
                "Server tidak memahami sintak permintaan dari klien" + err,
        });
    }
};

module.exports = { onUploadFile }