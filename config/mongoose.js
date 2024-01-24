// File untuk menghubungkan Webservice dengan MONGODB

require('dotenv').config();

const mongoose = require('mongoose')

const mongoURI = process.env.URI

mongoose.connect(mongoURI)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Koneksi MongoDB GAGAL :'))

db.once('open', () => {
    console.log('Berhasil terhubungn ke MongoDB')
})

module.exports = mongoose;