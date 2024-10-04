require('dotenv').config();

module.exports = {
  development: { 
    use_env_variable: false, // Atur ke false atau hapus jika tidak digunakan
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  }
};