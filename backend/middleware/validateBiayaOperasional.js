module.exports = (req, res, next) => {
    const { tanggalKunjungan, agency, alamat, noTelepon, aktivitas, hasil } = req.body;

    if (!tanggalKunjungan || !agency || !alamat || !noTelepon || !aktivitas || !hasil) {
        return res.status(400).json({ message: 'All required fields must be filled' });
    }

    next();
};

