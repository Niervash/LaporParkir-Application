'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petugas_parkir extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      petugas_parkir.belongsTo(models.User,{
        foreignKey: 'idPengguna',
        as:'user'
      })
    }
  }
  petugas_parkir.init({
    idPengguna: {
      type: DataTypes.INTEGER,
    },
    lokasi: {
      type:DataTypes.ENUM,
      allowNull: false,
      values: ["Pusat Perbelanjaan", "Gedung Perkantoran", "Rumah Sakit", "Universitas", "Tempat Umum"]
    },
    tanggaldanwaktu: {
      type: DataTypes.DATE,
      allowNull: false
    },
    latitude:{
      type: DataTypes.DECIMAL(9,6),
      allowNull: false
    },
    longitude: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: false
    },
    identitas_petugas: {
      type: DataTypes.ENUM,
      values: ["Ada", "Tidak Ada"],
      allowNull: false
    },
    hari: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ["Liar", "Tidak Liar"],
      allowNull: false
    },
    bukti: DataTypes.STRING,
    status_post: {
      type: DataTypes.ENUM,
      values: ["Approve", "Pending", "Reject"],
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'petugas_parkir',
  });
  return petugas_parkir;
};