const ClassroomModel = require('../models/classroom');

async function getAllClassrooms(req, res) {
    try {
        const classrooms = await ClassroomModel.find();
        console.log(classrooms);
        res.render('classroom-archive', { classrooms: classrooms });
    } catch (error) {
        console.error('Error fetching classrooms:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createClassroom(req, res) {
    try {
        const name = req.body.name;
        const capacity = req.body.capacity;
        const resources = req.body.resources; // Assuming this is an array of strings or objects
        const newClassroom = new ClassroomModel({ name, capacity, resources });
        await newClassroom.save();
        res.redirect('/classrooms/' + newClassroom._id);
    } catch (error) {
        console.error('Error creating classroom:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function displayClassroom(req, res) {
    try {
        const classroom = await ClassroomModel.findById(req.params.id);
        res.render('display-classroom', { classroom });
    } catch (error) {
        console.error('Error displaying classroom:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteClassroom(req, res) {
    try {
        const id = req.params.id;
        await ClassroomModel.findByIdAndDelete(id);
        res.redirect('/classrooms');
    } catch (error) {
        console.error('Error deleting classroom:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateClassroom(req, res) {
    try {
        const id = req.params.id;
        const updatedData = {
            name: req.body.name,
            capacity: req.body.capacity,
            resources: req.body.resources 
        };
        await ClassroomModel.findByIdAndUpdate(id, updatedData);
        res.redirect('/classrooms/' + id);
    } catch (error) {
        console.error('Error updating classroom:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getUpdateClassroomPage(req, res) {
    try {
        const classroom = await ClassroomModel.findById(req.params.id);
        res.render('update-classroom', { classroom });
    } catch (error) {
        console.error('Error fetching classroom for update:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getAllClassrooms,
    createClassroom,
    displayClassroom,
    deleteClassroom,
    updateClassroom,
    getUpdateClassroomPage
};
