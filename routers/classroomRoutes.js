const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');

// GET request to fetch all classrooms
router.get('/', classroomController.getAllClassrooms);

// POST request to create a new classroom
router.post('/', classroomController.createClassroom);

// GET request to fetch a single classroom by ID
router.get('/:id', classroomController.getClassroomById);

// PUT request to update a classroom by ID
router.put('/:id', classroomController.updateClassroom);

// DELETE request to delete a classroom by ID
router.delete('/:id', classroomController.deleteClassroom);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const classroomController = require('../controllers/classroomController');
// const rateLimit = require('express-rate-limit');

// // Middleware for validating request body
// const validateRequestBody = (req, res, next) => {
//   // Perform validation logic here
//   // ...
//   next();
// };

// // Middleware for validating the ':id' parameter
// router.param('id', (req, res, next, id) => {
//   // Validate the id parameter
//   if (!isValidId(id)) {
//     return res.status(400).json({ error: 'Invalid ID' });
//   }
//   next();
// });

// // Rate limiting middleware
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
// });

// // Apply rate limiting middleware to all routes
// router.use(limiter);

// // GET request to fetch all classrooms
// router.get('/', classroomController.getAllClassrooms);

// // POST request to create a new classroom
// router.post('/', validateRequestBody, classroomController.createClassroom);

// // GET request to fetch a single classroom by ID
// router.get('/:id', classroomController.getClassroomById);

// // PUT request to update a classroom by ID
// router.put('/:id', validateRequestBody, classroomController.updateClassroom);

// // DELETE request to delete a classroom by ID
// router.delete('/:id', classroomController.deleteClassroom);

// // Error handling middleware
// router.use((err, req, res, next) => {
//   // Handle the error and send an appropriate response
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// module.exports = router;
