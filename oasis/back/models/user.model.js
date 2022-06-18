const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
    /* validate : (value)=>{
      return validator.isEmail(value)
    } */
  },
  seniority: {
    type: String,
    
  },
  mainStack: {
    type: String
  },
  skills: {
    type: String
  },
  location: {
    type: String
  },
  rate: {
    type: String
  },
  english: {
    type: String
  },
  fechaPresentacion: {
    type: String
  },
  empresa: {
    type: String
  },
  experiencia: {
    type: String
  },
  gmail: {
    type: String
  },
  linkedin: {
    type: String
  },
},{
  timestamps: true
});

module.exports = User = mongoose.model("usuarios", userSchema);