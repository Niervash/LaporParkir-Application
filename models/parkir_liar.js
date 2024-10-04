'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class parkir_liar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      parkir_liar.belongsTo(models.User,{
        foreignKey: 'idUser',
        as:'user'
      })
      
    }
  }
  parkir_liar.init({
    idUser: {
      type: DataTypes.INTEGER,
      
    },
    jenis_kendaraan: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['Motor', 'Mobil']
    },
    tanggaldanwaktu: DataTypes.DATE,
    latitude: {
      type:DataTypes.DECIMAL(9,6),
      allowNull: false
    },
    longitude: {
      type:DataTypes.DECIMAL(9,6),
      allowNull: false
    },
    lokasi: {
      type:DataTypes.ENUM,
      values: ["Pusat Perbelanjaan", "Gedung Perkantoran", "Rumah Sakit", "Universitas", "Tempat Umum"],
      allowNull: false
    },
    status:{
      type: DataTypes.ENUM,
      values: ["Jl. H. Agus Salim", "Jl. Imam Bonjol", "Jl. Ir. Soekrano", "Jl. Jendral Sudirman", "jl. Merpati", "Jl. Nuri", "Jl. Sisingamangaraja", "Kantor Wali Kota"],
      allowNull: false
    },
    deskripsi_masalah: {
      type:DataTypes.STRING,
      allowNull: false
    },
    hari: {
      type:DataTypes.STRING,
      allowNull: false
    },
    bukti:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'parkir_liar',
  });
  return parkir_liar;
};