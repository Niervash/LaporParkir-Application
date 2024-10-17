'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('petugas_parkirs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPengguna:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      lokasi: {
        type: Sequelize.ENUM,
        values: ["Pusat Perbelanjaan", "Gedung Perkantoran", "Rumah Sakit", "Universitas", "Tempat Umum"]
        
      },
      tanggaldanwaktu: {
        type: Sequelize.DATE
      },
      latitude: {
        type: Sequelize.DECIMAL(9,6),
        allowNull: false,
      },
      longitude:{
        type: Sequelize.DECIMAL(9,6),
        allowNull:false
      },
      identitas_petugas: {
        type: Sequelize.ENUM,
        values: ["Ada", "Tidak Ada"]
      },
      hari: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values: ["Liar", "Tidak Liar"]
      },
      bukti: {
        type: Sequelize.STRING
      },
      status_post: {
        type: DataTypes.ENUM ("Approve", "Pending", "Reject"),
        defaultValue: 'Pending',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('petugas_parkirs');
  }
};