const { where } = require('sequelize');
const {petugas_parkir} = require('../models');
const cloudinary = require('cloudinary').v2


module.exports = {
    approvePetugasParkir: async (req, res, next) => {

        const {id} = req.params;
        const {action} = req.body
    
    
        const data = await petugas_parkir.findByPk(id)
        if(!data) {
            return res.status(404).json({
                message: "Data Petugas Tidak Ditemukan"
            })
        }
    
        if (action === 'Approve') {
    
            data.status_post = 'Approve'
            await data.save()
            return res.status(200).json({
                message: "Data Petugas Parkir di Setujui",
                status_post: data.status_post
            })
            
        }else if (action === 'Reject'){
            data.status_post = 'Reject'
            if (data.bukti) {
                const publicId = data.bukti.split('/').slice(-2).join('/').split('.')[0]

                await cloudinary.uploader.destroy(publicId)
            }


            await petugas_parkir.destroy({where: {id: data.id}})
            return res.status(200).json({
                message: "Data Petugas Parkir di Tolak",
                status_post: data.status_post
            })
        } else {
            return res.status(400).json({
                message: 'Action harus berupa "Approve" atau "Reject"'
            })
            
        }
        await data.save()
        res.status(200).json({
            message: "Data Petugas Parkir telah $ {data.status_post"
        })
    
        
    }
}