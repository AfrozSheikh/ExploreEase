

// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ['traveler', 'guide'],
//     required: true,
//   },
//   gender: {
//     type: String,
//     enum: ['male', 'female', 'other'],
//     required: function () {
//       return this.role === 'guide';
//     },
//   },
// });

// const User = mongoose.model('User', UserSchema);
// module.exports = User;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['traveler', 'guide'],
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: function () {
      return this.role === 'guide';
    },
  },
  selectedTransport: {
    type: {
      type: String,
     
    },
    departureTime: String,
    source: String,
    destination: String,
    price: Number,
  },
  selectedDestination: {
    name: String,
    city: String,
    state: String,
    opensAt: String,
    closesAt: String,
    bestTimeToVisit: String,
    imageUrl: String,
  },
  selectedGuide: {
    id: String,
    name: String,
    email: String,
    gender: String,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
