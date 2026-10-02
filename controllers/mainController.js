// Fungsi Halaman Utama
exports.tampilkanLandingPage = (req, res) => { res.render('index', { judulWeb: "NEEDMAP - Beranda" }); };
exports.tampilkanTentang = (req, res) => { res.render('tentang', { judulWeb: "NEEDMAP - Tentang Kami" }); };
exports.tampilkanPerjalanan = (req, res) => { res.render('perjalanan', { judulWeb: "NEEDMAP - Perjalanan" }); };
exports.tampilkanJelajahi = (req, res) => { res.render('jelajahi', { judulWeb: "NEEDMAP - Jelajahi NEED" }); };
exports.tampilkanBuat = (req, res) => { res.render('buat', { judulWeb: "NEEDMAP - Buat NEED" }); };

// Fungsi Alur Donasi dengan Simulasi Database
exports.tampilkanDetailPanti = (req, res) => { 
    const id = req.params.id; // Menangkap nama panti yang diklik di URL
    
    // Ini simulasi database. Data ini yang akan dikirim ke halaman detail.ejs
    const databasePanti = {
        'panti-a': {
            nama: "Panti A", deskripsiSingkat: "Setiap anak berhak mendapatkan kebutuhan dasar yang layak",
            deskripsiPanjang: "Panti Kasih Harapan saat ini membutuhkan bantuan susu bayi untuk memenuhi kebutuhan nutrisi harian bagi 25 anak yang berada dalam perawatan mereka.",
            kategori: "Kebutuhan Pokok", jenisBantuan: "Barang", kebutuhanUtama: "Susu bayi",
            jumlahDibutuhkan: "• 30 kaleng susu bayi usia 0-12 bulan<br>• 20 kaleng susu bayi usia 1-3 tahun",
            lokasi: "Jakarta Selatan", batasWaktu: "30 Oktober 2026", skor: 85, hariLagi: 11
        },
        'panti-b': {
            nama: "Panti B", deskripsiSingkat: "Bantu penuhi asupan pangan bergizi untuk pertumbuhan",
            deskripsiPanjang: "Panti B sangat membutuhkan pasokan bahan makanan pokok harian seperti beras, minyak goreng, dan lauk kering untuk menghidupi 40 anak asuh di panti.",
            kategori: "Kebutuhan Pokok", jenisBantuan: "Barang", kebutuhanUtama: "Bahan Makanan",
            jumlahDibutuhkan: "• 50 kg Beras putih<br>• 15 liter Minyak Goreng<br>• Aneka lauk pauk kering",
            lokasi: "Jakarta Timur", batasWaktu: "25 Oktober 2026", skor: 95, hariLagi: 8
        },
        'rumah-singgah-b': {
            nama: "Rumah Singgah B", deskripsiSingkat: "Pakaian hangat dan layak pakai untuk melindungi mereka",
            deskripsiPanjang: "Anak-anak jalanan di Rumah Singgah B membutuhkan donasi pakaian layak pakai, terutama jaket dan pakaian lengan panjang untuk menghadapi cuaca yang semakin tidak menentu.",
            kategori: "Kebutuhan Sandang", jenisBantuan: "Barang", kebutuhanUtama: "Pakaian layak pakai",
            jumlahDibutuhkan: "• 30 pcs Jaket anak-anak<br>• Pakaian harian untuk usia 5-15 tahun",
            lokasi: "Jakarta Barat", batasWaktu: "15 November 2026", skor: 38, hariLagi: 23
        }
    };

    // Cari data panti sesuai ID, jika tidak ada, gunakan panti-a sebagai bawaan
    const dataPanti = databasePanti[id] || databasePanti['panti-a'];
    
    // Mengirim dataPanti ke kerangka detail.ejs
    res.render('detail', { judulWeb: `NEEDMAP - ${dataPanti.nama}`, panti: dataPanti }); 
};

exports.tampilkanPilihBantuan = (req, res) => { res.render('pilih-bantuan', { judulWeb: "NEEDMAP - Pilih Bantuan" }); };
exports.tampilkanBantuDana = (req, res) => { res.render('bantu-dana', { judulWeb: "NEEDMAP - Bantu Dana" }); };
exports.tampilkanBantuBarang = (req, res) => { res.render('bantu-barang', { judulWeb: "NEEDMAP - Bantu Barang" }); };
exports.tampilkanBantuLainnya = (req, res) => { res.render('bantu-lainnya', { judulWeb: "NEEDMAP - Cara Lain" }); };
exports.tampilkanFormNeed = (req, res) => { res.render('form-need', { judulWeb: "NEEDMAP - Formulir Pengajuan" }); };
// --- SIMULASI DATABASE ARTIKEL BLOG ---
const databaseArtikel = {
    'harapan-tumbuh': { 
        judul: 'Ketika Bantuan Hadir, Harapan Tumbuh di Panti Asuhan', 
        kategori: 'Cerita Dampak', tanggal: '20 September 2026', 
        konten: 'Kisah selengkapnya tentang bagaimana bantuan susu bayi dan sembako mengubah senyum anak-anak di Panti Kasih Harapan. Melalui platform Needmap, para donatur dapat melihat langsung transparansi penyaluran bantuan. Anak-anak kini mendapatkan nutrisi yang layak...' 
    },
    'satu-bantuan': { 
        judul: 'Dari satu bantuan, Hadir Banyak Harapan', 
        kategori: 'Cerita Dampak', tanggal: '18 September 2026', 
        konten: 'Satu langkah kecil dari Anda bisa berarti dunia bagi mereka. Artikel ini membahas bagaimana donasi pakaian layak pakai dan buku tulis telah membuka akses pendidikan yang lebih baik bagi puluhan anak jalanan di Jakarta Barat...' 
    },
    'bersama-tepat': { 
        judul: 'Bersama, Kita Bisa Membantu Lebih Tepat', 
        kategori: 'Komunitas', tanggal: '15 September 2026', 
        konten: 'Kolaborasi antar komunitas sosial menghasilkan data yang lebih akurat mengenai wilayah mana saja yang mengalami krisis. Needmap hadir sebagai jembatan yang menghubungkan relawan lapangan dengan donatur...' 
    },
    '5-hal-donasi': { 
        judul: '5 Hal Yang Perlu Kamu Tahu Sebelum Berdonasi', 
        kategori: 'Tips Donasi', tanggal: '10 September 2026', 
        konten: 'Berdonasi bukan sekadar memberi. Berikut 5 hal penting: 1. Riset penerima bantuan. 2. Sesuaikan dengan kebutuhan mendesak. 3. Cek transparansi lembaga. 4. Berikan dukungan moral. 5. Gunakan platform terpercaya berbasis data seperti Needmap.' 
    }
};

exports.tampilkanInsight = (req, res) => { 
    res.render('insight', { judulWeb: "NEEDMAP - Insight dan Berita" }); 
};

exports.tampilkanArtikelDetail = (req, res) => { 
    const id = req.params.id;
    const artikel = databaseArtikel[id] || databaseArtikel['harapan-tumbuh'];
    res.render('artikel', { judulWeb: `NEEDMAP - ${artikel.judul}`, artikel: artikel }); 
};

exports.tampilkanMasuk = (req, res) => { res.render('masuk', { judulWeb: "NEEDMAP - Masuk" }); };
exports.tampilkanDaftar = (req, res) => { res.render('daftar', { judulWeb: "NEEDMAP - Daftar Akun" }); };