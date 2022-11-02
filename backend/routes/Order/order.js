const express = require("express");
const order = require("../../models/Order/order");


const router = express.Router();

//save student

router.post("/order/save",(req,res)=>{
    
    let neworder = new order(req.body);

    neworder.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err,
            });
        }
        return res.status(200).json({
            success:"order saved successfully"
        });
    });
});


//get student

router.get('/order',(req,res) =>{
    order.find().exec((err,order) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingorder:order
        });
    });
});

//get a specific student
router.get("/order/:id",(req,res) =>{

    let orderId = req.params.id;

    order.findById(orderId, (err, order) => {
      if (err) {
        return res.status(400).json({success:false, err });
      }
      return res.status(200).json({
        success: true,
        order
      });
    });

});


//update student

router.put('/order/update/:id',(req,res)=>{
    order.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        (err,order)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succefully"
            });
        }
    );
    });


    //delete student

    router.delete("/order/delete/:id",(req,res) =>{
        order.findByIdAndRemove(req.params.id).exec((err,deletedorder) =>{
                if(err) return res.status(400).json({
                    message:"deleted unsuccesfull",err
                });
                return res.json({
                    message:"Delete Succesfull",deletedorder
            });
    });



});

//Enrol

router.post('/StudentLogin', async(req,res) => {
    try{
            const {studentName, studentID} = req.body;

            if(!studentName || !studentID){

                return res.status(400).json({error: "Please fill  all data"})

            }
            //check with database courseName
            const StudentLogin = await findOne({studentName: studentName});
            //console.log(studentLogin);
  if(!StudentLogin){

                res.status(400).json({error: "Student does not exists"});
            }
            else if (studentID == StudentLogin.studentID){
                 res.json({message: "Student Enrollement  Successfull"});

                console.log(res.status.error);

            }else{

                res.status(400).json({error: "Invalid Credientials"});
            }

    }catch(err){

        console.log(err);

    }


});





module.exports = router;
