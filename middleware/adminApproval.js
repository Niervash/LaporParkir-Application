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
    
        if (action === 'approve') {
    
            data.status = 'Approved'
            await data.save()
            return res.status(200).json({
                message: "Data Petugas Parkir di Setujui",
                status: data.status
            })
            
        }else if (action === 'reject'){
            data.status = 'Rejected'
            await data.save()
            return res.status(200).json({
                message: "Data Petugas Parkir di Tolak",
                status: data.status
            })
        } else {
            return res.status(404).json({
                message: 'Action harus berupa "approve" atau "reject"'
            })
            
        }
        await data.save()
        res.status(200).json({
            message: "Data Petugas Parkir telag $ {data.status_post"
        })
    
        
    }
}