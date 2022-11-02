const mongoose = require("mongoose");

const orderpreviewSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },

  site: {
    type: String,
    required: true,
  },

  quantity: {
    type: String,
    required: true,
  },
  unitprice: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  projectSite: {
    type: String,
    required: true,
  },
  projectBudget: {
    type: String,
    required: true,
  },
  remainingBudget: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: String,
    required: true,
  },
  orderData: {
    type: String,
    required: true,
  },
  dueData: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  approvel: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("orderpreview", orderpreviewSchema);
