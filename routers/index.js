const express = require('express');
const router = express.Router();

// Import routers
const classroomRoutes = require('./classroomRoutes');
const userRoutes = require('./userRoutes');

// Use routers
router.use('/classrooms', classroomRoutes);
router.use('/users', userRoutes);

// Export the top-level router
module.exports = router;


// const express = require('express');
// const helmet = require('helmet');
// const router = express.Router();
// const rateLimit = require("express-rate-limit");
// const cors = require('cors');
// const logger = require('./logger'); // Assuming a logger middleware is implemented
// const errorHandler = require('./errorHandler');

// // Import routers
// const classroomRoutes = require('./classroomRoutes');
// const userRoutes = require('./userRoutes');

// // Use logger middleware
// router.use(logger);

// // Use rate limiter
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
//   message: "Too many requests from this IP, please try again later"
// });
// router.use(limiter);

// // Use CORS middleware
// router.use(cors());

// // Use routers
// router.use('/classrooms', classroomRoutes);
// router.use('/users', userRoutes);

// // Add security headers
// router.use(helmet());

// // Use error handling middleware
// router.use(errorHandler);

// // Export the top-level router
// module.exports = router;
