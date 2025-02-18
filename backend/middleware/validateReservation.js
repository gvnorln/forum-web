//backend/middleware/validateReservation.js

module.exports = (req, res, next) => {
    const { tanggalAwal, tanggalAkhir, lantai, namaKegiatan, pic, waktuAwal, waktuAkhir, fasilitasRuangan, layoutRuangan } = req.body;

    if (!tanggalAwal || !tanggalAkhir || !lantai || !namaKegiatan || !pic || !waktuAwal || !waktuAkhir || !fasilitasRuangan || !layoutRuangan) {
        return res.status(400).json({ message: 'All required fields must be filled' });
    }

    next();
};


