const Moment = require('../models/Moment');

exports.getAllMoments = async (req, res) => {
    try {
        const moments = await Moment.findAll();
        res.json(moments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

