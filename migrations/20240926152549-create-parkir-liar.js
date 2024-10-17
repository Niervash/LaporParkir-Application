'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('parkir_liars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      jenis_kendaraan: {
        type: Sequelize.ENUM,
        values: ['Motor', 'Mobil']
      },
      tanggaldanwaktu: {
        type: Sequelize.DATE
      },
      latitude: {
        type: Sequelize.DECIMAL(9,6)
      },
      longitude: {
        type: Sequelize.DECIMAL(9,6)
      },
      lokasi: {
        type: Sequelize.ENUM,
        values: ["Jl. H. Agus Salim", "Jl. Imam Bonjol", "Jl. Ir. Soekrano", "Jl. Jendral Sudirman", "jl. Merpati", "Jl. Nuri", "Jl. Sisingamangaraja", "Kantor Wali Kota"]
      },
      status:{
        type: Sequelize.ENUM,
        values: ["Liar", "Tidak Liar"]
      },
      deskripsi_masalah: {
        type: Sequelize.STRING
      },
      hari: {
        type: Sequelize.STRING
      },
      bukti:{
        type: Sequelize.STRING
      },
      status_post: {
        type: Sequelize.ENUM,
        values: ["Approve", "Pending", "Reject"],
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
    await queryInterface.dropTable('parkir_liars');
  }
};