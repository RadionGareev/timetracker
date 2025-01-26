const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Замените на ваш секретный ключ

exports.generateToken = (user) => {
    return jwt.sign({ id: user.id, role: user.role }, secretKey, { expiresIn: '24h' });
};

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null;
    }
};

exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = this.verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid token.');
    }
};
