const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
    trim: true
  },
  unitName: {
    type: String,
    required: true,
    trim: true
  },
  instructors: {
    classrooms: []
  }
});

module.exports = mongoose.model('Classroom', ClassroomSchema);