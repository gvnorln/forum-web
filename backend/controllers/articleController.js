const Article = require('../models/Articles');

exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.json(articles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    
};
