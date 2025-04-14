const mongoose = require('mongoose');

const zoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  location: {
    address: { type: String },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  areaInAcres: {
    type: Number,
    required: true
  },
  industryFocus: {
    type: [String],
    enum: ['Manufacturing', 'IT', 'Textiles', 'Pharmaceuticals', 'Food Processing', 'Automobile', 'Electronics']
  },
  connectivity: {
    road: { type: Boolean, default: false },
    rail: { type: Boolean, default: false },
    air: { type: Boolean, default: false },
    port: { type: Boolean, default: false }
  },
  costPerSqFt: {
    type: Number,
    required: true
  },
  currentUtilization: {
    type: Number,
    required: true
  },
  img: {
    type: String 
  },
  schemes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scheme'
  }],
  description: {
    type: String
  }
});

module.exports = mongoose.model('Zone', zoneSchema);
