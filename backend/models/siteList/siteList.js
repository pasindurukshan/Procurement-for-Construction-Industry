//const { truncateSync } = require('fs');
const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  siteManager: {
    type: String,
    required: true,
  },
  
  
});
module.exports = mongoose.model("sitelist", siteSchema);
