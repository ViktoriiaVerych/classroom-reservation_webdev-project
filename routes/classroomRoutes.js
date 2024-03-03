// const express = require('express');
// const router = express.Router();
// const classroomController = require('../controllers/classroomController');

// router.get('/', (req, res) => {
//     classroomController.listAllClassrooms(req, res);
// });
// router.get('/:id', (req, res) => {
//     classroomController.getClassroomById(req, res);
// });
// router.post('/', (req, res) => {
//     classroomController.createClassroom(req, res);
// });
// router.put('/:id', (req, res) => {
//     classroomController.updateClassroom(req, res);
// });
// router.delete('/:id', (req, res) => {
//     classroomController.deleteClassroom(req, res);
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');

router.get('/', classroomController.listAllClassrooms);
router.get('/:id', classroomController.getClassroomById);
router.post('/', classroomController.createClassroom);
router.put('/:id', classroomController.updateClassroom);
router.delete('/:id', classroomController.deleteClassroom);

module.exports = router;


// const classroomController = require('../controllers/classroomController');

// module.exports = function(app) {
//     app.get('/classrooms', classroomController.listAllClassrooms);
//     app.get('/classrooms/:id', classroomController.getClassroomById);
//     app.post('/classrooms', classroomController.createClassroom);
//     app.put('/classrooms/:id', classroomController.updateClassroom);
//     app.delete('/classrooms/:id', classroomController.deleteClassroom);
// };

// module.exports = router;
