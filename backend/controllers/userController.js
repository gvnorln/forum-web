const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Cari pengguna berdasarkan username
        const user = await User.findOne({ where: { username } });

        // Jika pengguna tidak ditemukan atau password salah
        if (!user || user.password !== password) {
            return res.json({ success: false, message: "Username atau Password tidak valid!" });
        }
        

        // Buat payload untuk token JWT
        const payload = {
            user: {
                id: user.userid, // Atur id atau identifier unik pengguna di sini
                username: user.username, // Anda bisa menambahkan informasi pengguna lainnya jika perlu
            }
        };

        // Sign token
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' }, // Token kedaluwarsa dalam 1 jam
            (err, token) => {
                if (err) throw err;
                res.json({
                    success: true,
                    token,
                    user: {
                        id: user.userid,
                        username: user.username,
                        email: user.email // Anda bisa menambahkan informasi pengguna lainnya jika perlu
                    }
                });
            }
        );

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.allUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
