const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const url = 'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg'

const userSchema = new Schema({
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
  role: {
    type: String,
    required: true,
    trim: true,
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
    type: String, 
    default: url
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
    type: String
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

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
