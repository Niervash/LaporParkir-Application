const cloudinary = require('cloudinary').v2
const { where } = require('sequelize')
const model = require('../models')
const user = require('../models/user')
const {User} = model
const {petugas_parkir} = model


module.exports = {

    getAllPetugas :async (req, res) => {

        try {
            const idPenggunaParam = req.params.idPengguna; 
            const idPenggunaSession = req.session.idPengguna; 
      
            console.log('ID Pengguna dari Session:', idPenggunaSession); 
            console.log('ID Pengguna dari Parameter:', idPenggunaParam); 
        
            if (String(idPenggunaSession) !== String(idPenggunaParam)) {
                return res.status(401).json({ message: "Anda tidak memiliki izin untuk mengakses data ini." });
            }
    
            const petugas = await petugas_parkir.findAll({
                where: { idPengguna: idPenggunaSession }, 
                attributes: [
                    "id",
                    "idPengguna",
                    "lokasi",
                    "tanggaldanwaktu",
                    "latitude",
                    "longitude",
                    "identitas_petugas",
                    "hari",
                    "status",
                    "bukti"
                ]
            });
    
    
            if (petugas.length === 0) {
                return res.status(404).json({ message: "Tidak ada data petugas ditemukan" });
            }
    
            res.json({
                message: "Sukses Mengambil Data Petugas",
                data: petugas
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Gagal mengambil data petugas", error: error.message });
        }
    },

    getPetugasById: async (req, res) => {
        try {
            const postId = req.params.id; 
    
            if (!postId) {
                return res.status(400).json({ message: "ID postingan tidak disediakan." });
            }
    
            const post = await petugas_parkir.findOne({ where: { id: postId } }); // Ambil data postingan berdasarkan ID
    
            if (!post) {
                return res.status(404).json({ message: "Postingan tidak ditemukan." });
            }
    
            res.json({
                message: "Sukses Mengambil Data Postingan",
                data: post
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Gagal mengambil data postingan", error: error.message });
        }
    },


    
    addPetugas: async (req,res) =>{
        const {lokasi,tanggaldanwaktu,latitude, longitude, identitas_petugas, hari, status} = req.body
        console.log("Received body:", req.body);
        console.log("Received file:", req.file);

        try {
            const userId = req.session.idPengguna
            
            if(!req.file){
                res.status(400).json({
                    message: "Gambar Tidak Ditemukan"
                })
            }

            console.log("Upload to Cloudinary");

            const result = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: 'petugas_parkir', resource_type: 'auto' }, 
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result);
                    }
                );
    
                
                uploadStream.end(req.file.buffer); 
            });

            console.log("Upload successful:", result); 
            await petugas_parkir.create({
                lokasi: lokasi,
                tanggaldanwaktu: tanggaldanwaktu,
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                identitas_petugas: identitas_petugas,
                hari: hari,
                status: status,
                bukti: result.secure_url,
                idPengguna: userId,
                status_post: 'Pending'
            });
    
            res.status(201).json({
                message: "Berhasil Menambahkan Petugas",
                gambarUrl: result.secure_url 
            });
            

        } catch (error) {
            console.error("Terjadi kesalahan saat menambahkan Petugas:", error); 
            res.status(500).json({
                message: "Gagal Menambahkan Petugas",
                error: error.message 
            });
        }

        
    },

    checkPetugasParkirStatus: async (req, res) => {
        const {id} = req.params
        const data = await petugas_parkir.findByPk(id)

        if (!data) {
            return res.status(404).json({
                message: "Data Petugas Tidak di Temukan"
            })
        }
        res.status(200).json({
                lokasi: data.lokasi,
                tanggaldanwaktu: data.tanggaldanwaktu,
                latitude: data.latitide,
                longitude: data.longitude,
                identitas_petugas: data.identitas_petugas,
                bukti: data.bukti,
                status_post: data.status_post,
                message: data.status_post === 'Pending' ? 'Menunggu persetujuan admin.' : `Status: ${data.status_post}`

        })

    },

    updatePetugas: async (req,res) =>{
        const petugas = await petugas_parkir.findOne({
            where: {
                id: req.params.id
            }
        })
        if(!petugas) return res.status(404).json({
            message: "Petugas Anda Tidak Ditemukan"
        })

        const { lokasi,tanggaldanwaktu,latitude, longitude, identitas_petugas, hari, status} = req.body;
        let bukti = petugas.bukti; 

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
                    { folder: 'petugas_parkir', resource_type: 'auto' },
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



            await petugas_parkir.update({
                lokasi: lokasi,
                tanggaldanwaktu: tanggaldanwaktu,
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                identitas_petugas: identitas_petugas,
                hari: hari,
                status: status,
                bukti: bukti,
                
            },{
                where:{
                    id: petugas.id
                }
            })
            res.status(200).json({
                message: "Petugas Berhasil Diupdate"
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
            
        }
    },

   
    

}