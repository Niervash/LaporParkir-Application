const express = require('express')
const server = express()
const allRouter = require('./routes')
// const cookieParser = require('cookie-parser')
const session = require('express-session')
const sequelizeStore = require('connect-session-sequelize')
const cors = require('cors')
const dotenv = require('dotenv')
const cloudinary = require('cloudinary').v2
const multer = require('multer')
const { sequelize } = require('./models')
const morgan = require('morgan')
dotenv.config()

const PORT = 3000

const sessionsStore = sequelizeStore(session.Store)

const store = new sessionsStore({
    db: sequelize,
    tableName: 'sessions'
})


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


server.use(morgan('tiny'))

server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    store: store,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: 'auto'
    }
}))

server.use(express.json())

server.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))




// server.use(cookieParser())
server.use(allRouter)
server.get('/', (req, res )=>{
    res.send("<h1>Home <h1>")
})


server.listen(PORT, ()=>{
    console.log("server running on port" , PORT)
})



