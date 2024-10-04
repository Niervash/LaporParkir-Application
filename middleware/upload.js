// middleware/upload.js
const multer = require('multer');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const mimetype = allowedTypes.test(file.mimetype);
    if (mimetype) {
        cb(null, true);
    } else {
        cb(new Error('Hanya file gambar yang diizinkan!'), false);
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Maksimal 5MB
    fileFilter: fileFilter
});

module.exports = upload;