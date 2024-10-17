const {petugas_parkir} = require('../models');


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
    
        if (action === 'Approved') {
    
            data.status_post = 'Approved'
            await data.save()
            return res.status(200).json({
                message: "Data Petugas Parkir di Setujui",
                status_post: data.status_post
            })
            
        }else if (action === 'Rejected'){
            data.status_post = 'Rejected'
            await data.save()
            return res.status(200).json({
                message: "Data Petugas Parkir di Tolak",
                status_post: data.status_post
            })
        } else {
            return res.status(400).json({
                message: 'Action harus berupa "approve" atau "reject"'
            })
            
        }

        await data.save()
        res.status(200).json({
            message: 'Data Petugas parkir telah ${data.status_post}'
        })
    
        
    }
}