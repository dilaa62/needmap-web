exports.tampilkanLandingPage = (req, res) => {
    res.render('index', { 
        judulWeb: "NEEDMAP - Landing Page" 
    });
};

exports.tampilkanLayanan = (req, res) => {
    res.render('layanan', { 
        judulWeb: "NEEDMAP - Layanan Kami" 
    });
};