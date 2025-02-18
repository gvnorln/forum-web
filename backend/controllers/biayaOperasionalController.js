const BiayaOperasional = require('../models/biayaOperasional');

exports.createBiayaOperasional = async (req, res) => {
    try {
        const biayaOperasional = await BiayaOperasional.create(req.body);
        res.status(201).json(biayaOperasional);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getBiayaOperasionals = async (req, res) => {
    try {
        const biayaOperasionals = await BiayaOperasional.findAll();
        res.status(200).json(biayaOperasionals);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBiayaOperasionalById = async (req, res) => {
    try {
        const biayaOperasional = await BiayaOperasional.findByPk(req.params.id);
        if (!biayaOperasional) {
            return res.status(404).json({ error: 'Biaya Operasional tidak ditemukan' });
        }
        res.status(200).json(biayaOperasional);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateBiayaOperasional = async (req, res) => {
    try {
        const [updated] = await BiayaOperasional.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Biaya Operasional tidak ditemukan' });
        }
        const updatedBiayaOperasional = await BiayaOperasional.findByPk(req.params.id);
        res.status(200).json(updatedBiayaOperasional);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteBiayaOperasional = async (req, res) => {
    try {
        const deleted = await BiayaOperasional.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Biaya Operasional tidak ditemukan' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
