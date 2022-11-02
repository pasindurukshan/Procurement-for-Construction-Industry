//const { truncateSync } = require('fs');
const mongoose = require("mongoose");

const projectsiteSchema = new mongoose.Schema({
  site: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  
});
module.exports = mongoose.model("projectsite", projectsiteSchema);
