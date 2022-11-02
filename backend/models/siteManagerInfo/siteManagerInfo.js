//const { truncateSync } = require('fs');
const mongoose = require("mongoose");

const siteManagerInfoSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  assistentMobile: {
    type: String,
    required: true,
  },
  assistent: {
    type: String,
    required: true,
  },
  noofLabours: {
    type: String,
    required: true,
  },
  
  
  
});
module.exports = mongoose.model("sitemangerInfo", siteManagerInfoSchema);
