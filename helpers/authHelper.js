const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET; // Ensure this is set in your environment variables

// Hash a password
async function hashPassword(password) {
    return await bcrypt.hash(password, 8);
}

// Compare a plain text password with a hashed password
async function comparePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

// Generate a JWT token
function generateToken(user) {
    return jwt.sign({ id: user._id }, secretKey, { expiresIn: '24h' });
}

// Verify a JWT token
function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null;
    }
}

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
    verifyToken
};
