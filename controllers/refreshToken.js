const models = require('../models');
const { User } = models;
const jwt = require('jsonwebtoken');

module.exports = {
    refreshToken: async (req, res) => {
        try {
            const refreshToken = req.cookies.refreshToken; // Ambil token dari cookie
            if (!refreshToken) return res.sendStatus(401); // Tidak ada token, kirim status 401

            // Cek pengguna berdasarkan refresh_token
            const user = await User.findAll({
                where: {
                    refresh_token: refreshToken // Pastikan nama kolomnya benar
                }
            });

            if (!user.length) return res.sendStatus(403); // Tidak ada pengguna ditemukan, kirim status 403

            // Verifikasi refresh token
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                if (err) return res.sendStatus(403); // Token tidak valid, kirim status 403

                const userId = user[0].id;
                const nama = user[0].nama;
                const email = user[0].email;
                const jenis_kelamin = user[0].jenis_kelamin;
                const username = user[0].username;

                // Buat access token
                const access_token = jwt.sign(
                    { userId, nama, email, jenis_kelamin, username },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '15s' } // Pastikan ini '15s' bukan '15S'
                );

                res.json({ access_token }); // Kirim access token
            });

        } catch (error) {
            console.log(error);
            res.sendStatus(500); // Kirim status 500 jika ada error
        }
    }


    
};