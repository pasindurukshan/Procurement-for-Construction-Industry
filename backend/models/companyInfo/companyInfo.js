const mongoose = require('mongoose');

const companyInfoSchema = new mongoose.Schema({
      siteId:{
        type:String,
        required:true,
       },
       
       name:{
        type:String,
        required:true,
       },

       mobile:{
        type:String,
        required:true,
       },
       address:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    bank:{
        type:String,
        required:true,
    },
    accountNo:{
        type:String,
        required:true,
    },

       });
       module.exports = mongoose.model("companyInfo",companyInfoSchema);







