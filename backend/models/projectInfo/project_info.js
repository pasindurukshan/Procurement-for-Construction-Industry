const mongoose = require('mongoose');


const pinfoSchema = new mongoose.Schema({

    siteId:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    estimatedBudget:{
        type:String,
        required:true
    },
    costForNow:{
        type:String,
        required:true
    },
    noofLabours:{
        type:String,
        required:true
    },
    startedDate:{
        type:String,
        required:true
    },
    finisheDate:{
        type:String,
        required:true
    },
   
    
});

module.exports = mongoose.model('pinfo',pinfoSchema);