const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || 'your_secret_key'; // Should be in an environment variable

// Hash password
exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, saltRounds);
};

// Compare password
exports.comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

// Generate JWT token
exports.generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, jwtSecret, { expiresIn: '24h' });
};

// Verify JWT token
exports.verifyToken = (token) => {
    return jwt.verify(token, jwtSecret);
};
