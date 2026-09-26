require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mainController = require('./controllers/mainController');

// Mengatur EJS sebagai mesin pembuat tampilan (views)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mengizinkan publik untuk melihat file di folder "public" (seperti CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Rute: Saat orang mengunjungi halaman utama ('/'), panggil controller
app.get('/', mainController.tampilkanLandingPage);

// Rute Halaman Layanan Kami
app.get('/layanan', mainController.tampilkanLayanan);

// Menyalakan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server NEEDMAP berhasil menyala! Buka http://localhost:${PORT} di browser Anda.`);
});