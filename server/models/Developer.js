const { Schema, model } = require('mongoose');

const developerSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  profileImage: {
    type: String
  },
  userDescription: {
    type: String,
  },
  sampleProjectName: {
    type: String
  },
  sampleProjectURL: {
    type: String
  },
  resumeURL: {
    type: String
  },
  primaryFocus: {
    type: String
  },
  skillSet: {
    type: [String]
  },
  hourlyRate: {
    type: Number
  },
  linkedIn: {
    type: String
  },
  gitHub: {
    type: String
  },
  servicesOffered: {
    type: String
  }
});

const Developer = model('Developer', developerSchema);

module.exports = Developer;
