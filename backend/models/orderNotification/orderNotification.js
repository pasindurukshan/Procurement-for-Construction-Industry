const mongoose = require('mongoose');


const notifySchema = new mongoose.Schema({

    orderId:{
        type:String,
        required:true
    },
    notification:{
        type:String,
        required:true
    },
    days:{
        type:String,
        required:true
    },
   
    
});

module.exports = mongoose.model('notify',notifySchema);