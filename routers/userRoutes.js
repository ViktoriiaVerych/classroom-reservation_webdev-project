const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST request to register a new user
router.post('/register', userController.createUser);

// GET request to fetch all users
router.get('/', userController.getAllUsers);

// GET request to fetch a single user by ID
router.get('/:id', userController.getUserById);

// PUT request to update a user's details by ID
router.put('/:id', userController.updateUser);

// DELETE request to delete a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');
// const { sanitizeRequestBody, validateId } = require('../middleware');

// // Middleware to validate request body
// const validateRequestBody = (req, res, next) => {
//   // Validate request body here
//   // ...
//   next();
// };

// // Middleware for error handling
// router.use((err, req, res, next) => {
//   // Handle error and send appropriate response code and message
//   res.status(err.statusCode || 500).json({
//     message: err.message || 'Internal Server Error'
//   });
// });

// // Middleware to authenticate and authorize users
// const authMiddleware = (req, res, next) => {
//   // Authenticate and authorize users here
//   // ...
//   next();
// };

// // POST request to register a new user
// router.post('/register', validateRequestBody, sanitizeRequestBody, userController.createUser);

// // GET request to fetch all users
// router.get('/', authMiddleware, userController.getAllUsers);

// // GET request to fetch a single user by ID
// router.get('/:id', authMiddleware, validateId, userController.getUserById);

// // PUT request to update a user's details by ID
// router.put('/:id', authMiddleware, validateId, userController.updateUser);

// // DELETE request to delete a user by ID
// router.delete('/:id', authMiddleware, validateId, userController.deleteUser);

// module.exports = router;


