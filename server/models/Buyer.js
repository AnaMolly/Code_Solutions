const { Schema, model } = require('mongoose');

const buyerSchema = new Schema({
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
  }
});

const Buyer = model('Buyer', buyerSchema);

module.exports = Buyer;
