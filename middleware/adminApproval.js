const {petugas_parkir} = require('../models');


module.exports = {
    approvePetugasParkir: async (req, res, next) => {

    const { id } = req.params;
    const { action } = req.body; // 'approve' atau 'reject'

    const data = await petugas_parkir.findByPk(id);
    if (!data) {
        return res.status(404).json({ message: 'Data petugas tidak ditemukan.' });
    }

    if (action === 'Approve') {
        data.status_post = 'Approved'; // Ubah status_post menjadi Approved
    } else if (action === 'Reject') {
        data.status_post = 'Rejected'; // Ubah status_post menjadi Rejected
    } else {
        return res.status(400).json({ message: 'Action harus berupa "Approve" atau "Reject".' });
    }

    await data.save();
    res.status(200).json({
        message: `Data petugas parkir telah ${data.status_post}.`,
        status_post: data.status_post
    });
    
        
    }
}