const express = require('express');
const app = express(); 
const userController = require('../controllers/userController');

app.post('/users/login', userController.login);
app.post('/users/register', userController.register);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
