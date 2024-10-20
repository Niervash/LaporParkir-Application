const express = require('express');
const server = express();
const allRouter = require('./routes');
const session = require('express-session');
const sequelizeStore = require('connect-session-sequelize')(session.Store);
const cors = require('cors');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const morgan = require('morgan');
const { Sequelize } = require('sequelize'); // Pastikan Sequelize diimpor
dotenv.config();

const PORT = process.env.DB_PORT;

// Ambil konfigurasi dari file config.js
const config = require('./config/config')[process.env.NODE_ENV || 'development'];

// Inisialisasi Sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
});

// Coba untuk melakukan koneksi
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Inisialisasi session store
const store = new sequelizeStore({
  db: sequelize,
  tableName: 'sessions'
});

// Konfigurasi Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// Middleware
server.use(morgan('tiny'));

server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  store: store,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 hari
    secure: 'auto' // Pastikan ini benar saat menggunakan HTTPS
  }
}));

server.use(express.json());
server.use(express.urlencoded({ extended: true }))


server.use(cors({
  origin: ['http://localhost:5173', 'https://laporparkir-application.onrender.com'],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization'
}));

// Router
server.use(allRouter);

// Route untuk home
server.get('/', (req, res) => {
  res.send("<h1>Home</h1>");
});

// Jalankan server
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});