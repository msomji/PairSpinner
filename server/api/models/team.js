const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const teamSchema = new Schema({
  teamName: {
    type: String,
    required: true,
  },
})

module.exports = Team = mongoose.model('teams', teamSchema);