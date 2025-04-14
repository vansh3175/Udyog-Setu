// scheme.model.js

const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  benefits: {
    type: [String], // e.g., ["Tax exemption", "Single-window clearance", "100% FDI allowed"]
    required: true
  },
  applicableIndustries: {
    type: [String], // e.g., ["IT", "Manufacturing"]
    required: true
  },
  eligibilityCriteria: {
    type: String // Optional but good to have
  },
  validFrom: {
    type: Date
  },
  validTill: {
    type: Date
  },
  officialLink: {
    type: String // URL to government or policy page
  }
});

module.exports = mongoose.model('Scheme', schemeSchema);
