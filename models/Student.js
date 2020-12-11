const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  docNum: {
    type: Number,
    required: true,
  },
  releaseData: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model('Student', StudentSchema);