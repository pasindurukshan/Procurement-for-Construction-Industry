const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
      orderId:{
        type:String,
        required:true,
       },
       
       orderDate:{
        type:String,
        required:true,
       },

       site:{
        type:String,
        required:true,
       },
       status:{
        type:String,
        required:true,
    },

       });
       module.exports = mongoose.model("Orderrs",orderSchema);







