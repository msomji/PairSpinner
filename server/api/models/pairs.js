const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PairsSchema = new Schema({
  teamName: {
    type: String,
    required: true,
  },
  spinDate: {
    type: Date,
    default: Date.now(),
    required: true
  },
  pairs: {
    type: [[String]],
    required: true,
  },
})


module.exports = mongoose.model('Pairs', PairsSchema);