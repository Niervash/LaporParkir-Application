'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.parkir_liar,{
        foreignKey: 'idUser',
        as: 'parkir_liar'
      })
      User.hasMany(models.petugas_parkir,{
        foreignKey: 'idPengguna',
        as: 'petugas_parkir'
      })
    }
  }
  User.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    jenis_kelamin: {
      type: DataTypes.ENUM,
      values: ['Pria', 'Wanita'], 
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role:{
      type: DataTypes.ENUM,
      values: ['admin', 'user']
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};