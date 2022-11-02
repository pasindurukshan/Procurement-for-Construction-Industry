const mongoose = require('mongoose');

const s112InventorySchema = new mongoose.Schema({

       itemId:{
           type:String,
           required:true
       },

       totalQuantity:{
        type:String,
        required:true
       },
       
       remainingQunatity:{
        type:String,
        required:true
       },

       totalUsage:{
        type:String,
        required:true
       },

       item:{
        type:String,
        required:true
       },

       
       });
       module.exports = mongoose.model('S112',s112InventorySchema);







