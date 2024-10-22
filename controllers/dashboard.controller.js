const model = require('../models');
const { User, petugas_parkir, parkir_liar } = model;

module.exports = {
    getDashboard: async (req, res) => {
        try {
            const userCount = await User.count();

            const approvePetugasCount = await petugas_parkir.count({
                where: { status_post: 'approved' } 
            });

            
            const approveParkirCount = await parkir_liar.count({
                where: { status_post: 'approved' }
            });

            
            const totalApprove = approveParkirCount + approvePetugasCount;

            const laporanPetugasCount = await petugas_parkir.count();
            const laporanParkirCount = await parkir_liar.count();

            const dataPetugas = await petugas_parkir.findAll({
                where:{status_post: 'approved'},
                attributes: ['latitude', 'longitude']
            })

            const dataParkir = await parkir_liar.findAll({
                where: {status_post: 'approved'},
                attributes: ['latitude', 'longitude']
            })

            const formattedPetugasData = dataPetugas.map(item => ({
                latitude: item.latitude,
                longitude: item.longitude
            }));

            const formattedParkirData = dataParkir.map(item => ({
                latitude: item.latitude,
                longitude: item.longitude
            }));

            
            res.json({
                userCount,
                totalApprove,
                laporanPetugasCount,
                laporanParkirCount,
                formattedPetugasData,
                formattedParkirData

            });
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            res.status(500).json({ message: 'Internal server error', error });
        }
    }
};