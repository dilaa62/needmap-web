require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mainController = require('./controllers/mainController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// --- PENGATURAN SESSION (Sesi Login) ---
app.use(session({
    secret: process.env.SESSION_SECRET || 'rahasia',
    resave: false,
    saveUninitialized: true
}));

// --- PENGATURAN PASSPORT & GOOGLE LOGIN ---
app.use(passport.initialize());
app.use(passport.session());

// Mengubah profil Google menjadi sesi (Simulasi tanpa Database)
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Strategi Google
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // Di sini biasanya kita menyimpan data user ke Database (MongoDB/MySQL)
    // Karena belum ada database, kita simpan sementara di sesi (memory)
    return done(null, profile);
  }
));

// --- RUTE GOOGLE LOGIN ---
// Saat tombol diklik, arahkan ke halaman Google
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Setelah user mengklik izinkan di Google, akan dilempar ke sini
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/masuk' }),
  function(req, res) {
    // Sukses Login! Lempar ke halaman Jelajahi
    res.redirect('/jelajahi');
  }
);

// Rute Logout
app.get('/keluar', (req, res) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

// --- DAFTAR RUTE HALAMAN LAINNYA ---
app.get('/', mainController.tampilkanLandingPage);
app.get('/tentang', mainController.tampilkanTentang);
app.get('/perjalanan', mainController.tampilkanPerjalanan);
app.get('/jelajahi', mainController.tampilkanJelajahi);
app.get('/buat', mainController.tampilkanBuat);
app.get('/form-need', mainController.tampilkanFormNeed);
app.get('/insight', mainController.tampilkanInsight);
app.get('/artikel/:id', mainController.tampilkanArtikelDetail);
app.get('/masuk', mainController.tampilkanMasuk);
app.get('/daftar', mainController.tampilkanDaftar);

// --- DAFTAR RUTE ALUR DONASI ---
app.get('/detail/:id', mainController.tampilkanDetailPanti);
app.get('/pilih-bantuan', mainController.tampilkanPilihBantuan);
app.get('/bantu-dana', mainController.tampilkanBantuDana);
app.get('/bantu-barang', mainController.tampilkanBantuBarang);
app.get('/bantu-lainnya', mainController.tampilkanBantuLainnya);

// --- KODE LAMA YANG DIHAPUS/DICOMMENT ---
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server NEEDMAP menyala!`);
// });

// --- KODE BARU UNTUK NETLIFY ---
module.exports = app;