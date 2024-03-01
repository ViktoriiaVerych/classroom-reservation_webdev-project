const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Assuming userController has methods for login, register, update, and delete
router.post('/login', userController.login);
router.post('/register', userController.register);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
