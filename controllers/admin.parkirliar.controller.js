const cloudinary = require('cloudinary').v2
const model = require('../models')
const {User} = model
const {parkir_liar} = model

module.exports ={

    getAllLaporan: async (req, res)=>{
        const laporan = await parkir_liar.findAll({
            attributes: ["jenis_kendaraan", "tanggaldanwaktu", "latitude", "longitude", "lokasi", "deskripsi_masalah","hari","bukti"],
            
        })
        res.json({
            message: "Sukses Mengambil Data Laporan",
            data: laporan
        })

    },

    getLaporanById: async (req, res)=>{
        const laporan = await parkir_liar.findOne({
            where :{
                id: req.params.id
            },
            attributes: ["jenis_kendaraan", "tanggaldanwaktu", "latitude", "longitude", "lokasi", "deskripsi_masalah","hari","bukti"],
            include: {
                model: User,
                as: 'user',
                attributes: ["nama", "username", "email"]
            }
        })
        res.json({
            message: "Sukses Mengambil Data Laporan",
            data: laporan
        })

    },


    addLaporan: async (req, res) => {
        const { jenis_kendaraan, tanggaldanwaktu, latitude, longitude, lokasi, status, deskripsi_masalah, hari } = req.body;
        console.log("Received body:", req.body);
        console.log("Received file:", req.file);
        try {
            const userId = req.session.userId;
    
            // Periksa apakah file gambar ada
            if (!req.file) {
                return res.status(400).json({ message: "Gambar tidak ditemukan." });
            }
    
            
            console.log("Uploading to Cloudinary...");
            
            const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'parkir_liar', resource_type: 'auto' }, 
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                }
            );

            
            uploadStream.end(req.file.buffer); 
        });
    
            console.log("Upload successful:", result); 
            await parkir_liar.create({
                jenis_kendaraan: jenis_kendaraan,
                tanggaldanwaktu: new Date(tanggaldanwaktu),
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                lokasi: lokasi,
                status: status,
                deskripsi_masalah: deskripsi_masalah,
                hari: hari,
                bukti: result.secure_url,
                idUser: userId
            });
    
            res.status(201).json({
                message: "Berhasil Menambahkan Laporan",
                gambarUrl: result.secure_url 
            });
    
        } catch (error) {
            console.error("Terjadi kesalahan saat menambahkan laporan:", error); 
            res.status(500).json({
                message: "Gagal Menambahkan Laporan",
                error: error.message 
            });
        }
    },


    updateLaporan: async (req, res) =>{
        const laporan = await parkir_liar.findOne({
            where: {
                id: req.params.id
            }
        })
        if(!laporan) return res.status(404).json({
            message: "Laporan Anda Tidak Ditemukan"
        })

        const { jenis_kendaraan, tanggaldanwaktu, latitude, longitude, lokasi,status, deskripsi_masalah, hari, } = req.body;
        let bukti = laporan.bukti; 

    try {
        
        if (req.file) {
            console.log("Menerima file baru untuk diupload:", req.file);

            if (bukti) {
                const publicId = bukti.split('/').slice(-2).join('/').split('.')[0];
                console.log("Deleting old image with publicId:", publicId);
                
 
                await cloudinary.uploader.destroy(publicId);
            }

            const result = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    { folder: 'parkir_liar', resource_type: 'auto' },
                    (error, result) => {
                        if (error) {
                            console.error("Error saat upload:", error);
                            return reject(error);
                        }
                        console.log("Upload result:", result);
                        resolve(result.secure_url);
                    }
                ).end(req.file.buffer);
            });
            bukti = result; 
        }



            await parkir_liar.update({
            jenis_kendaraan: jenis_kendaraan,
            tanggaldanwaktu: new Date(tanggaldanwaktu), 
            latitude: parseFloat(latitude), 
            longitude: parseFloat(longitude), 
            lokasi: lokasi,
            status: status,
            deskripsi_masalah: deskripsi_masalah, 
            hari: hari,
            bukti: bukti
            },{
                where:{
                    id: laporan.id
                }
            })
            res.status(200).json({
                message: "Laporan Berhasil Diupdate"
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
            
        }

        
    },

    deleteParkir : async (req, res) => {
        const { id } = req.params; 
    
        try {
            const parkirEntry = await parkir_liar.findOne({
                where: { id } 
            });
    
            if (!parkirEntry) {
                return res.status(404).json({ message: 'Data Parkir tidak ditemukan' });
            }
    
            // Hapus entri parkir
            await parkirEntry.destroy();
    
            // Kirim respons sukses
            return res.status(200).json({ message: 'Data Parkir berhasil dihapus' });
        } catch (error) {
            console.error('Error deleting parkir:', error);
            return res.status(500).json({ message: 'Terjadi kesalahan saat menghapus data parkir' });
        }

    }
}