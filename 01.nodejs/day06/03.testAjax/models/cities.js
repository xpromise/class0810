const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
  code: String,
  province: String,
  city: String,
  county: String,
  name: String,
  level: Number
})

module.exports = mongoose.model('cities', citiesSchema);