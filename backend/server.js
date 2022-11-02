const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");//convert jason to javascript
const cors=require("cors");
const dotenv=require("dotenv");
const app=express();
require("dotenv").config();

const PORT=process.env.PORT||8000;

//app middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL)
.then(()=>{
   console.log("MongoDB Connected Successfully!!"); 
}).catch((err)=>{
    console.log("MongoDB Connection Error",err.message);
})

//import course route
const courseRouter=require("./routes/Orderpreview/orderPreview");

//import staff route
const staffRouter=require("./routes/ordernotification/ordernotification");

//import route Library
const LibraryRoutes = require("./routes/projectsite/projectsite");

const siteListRoutes = require("./routes/siteList/siteList");

//import route payment
const paymentRouter=require("./routes/malabe_s112_inventory/malabe_s112_inventory");
//import routes students
const studentRoutes = require('./routes/Order/order');

const projectInfoRoutes = require('./routes/projectInfo/projectInfo');

const siteManagerInfoRoutes = require('./routes/siteManagerInfo/siteManagerInfo');


const companyInfoRoutes = require('./routes/companyInfo/companyInfo');

//app.use course router
app.use(courseRouter);
//app.use staff router
app.use(staffRouter);

app.use(companyInfoRoutes);

app.use(siteListRoutes);

//route middleware Library
app.use(LibraryRoutes);


//app.use payment router
app.use(paymentRouter);
app.use(projectInfoRoutes);
app.use(siteManagerInfoRoutes);


//route midddleware Student
app.use(studentRoutes);


app.listen(PORT,() => {//function(){}
    console.log(`Server is up and running on port number :${PORT}`);
    });



