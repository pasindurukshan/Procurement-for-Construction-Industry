const express = require('express');
const Staff = require('../../models/orderNotification/orderNotification');
const staff = require('../../models/orderNotification/orderNotification');

const router = express.Router();

//save posts

router.post('/notification/save',(req,res)=>{
    
    let newStaff = new Staff(req.body);

    newStaff.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"detail saved successfully"
        });
    });
});

//get posts

router.get('/notification',(req,res) =>{
    Staff.find().exec((err,staff) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStaff:staff
        });
    });
});

//get a specific post
router.get("/notification/:id",(req,res) =>{

    let orderId = req.params.id;

    Staff.findById(orderId, (err, staff) => {
      if (err) {
        return res.status(400).json({success:false, err });
      }
      return res.status(200).json({
        success: true,
        staff
      });
    });

});


//update posts

router.put('/notification/update/:id',(req,res)=>{
    Staff.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        (err,staff)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succefully"
            });
        }
    );
    });


    //delete post

    router.delete("/notification/delete/:id",(req,res) =>{
            Staff.findByIdAndRemove(req.params.id).exec((err,deletedstaff) =>{
                if(err) return res.status(400).json({
                    message:"deleted unsuccesful",err
                });
                return res.json({
                    message:"Delete Succesfull",deletedstaff
            });
    });
});

 //login

 //login

 router.post('/StaffLogin', async(req,res) => {

    try{

            const {name, password} = req.body;

            if(!name || !password){



                return res.status(400).json({error: "Please filled the all data"})

            }

            //check with database name

            const StaffLogin = await staff.findOne({name: name});

            //console.log(customerLogin);

            if(!StaffLogin){

                res.status(400).json({error: "Staff does not exists"});

            }

            else if (password == StaffLogin.password){

                res.json({message: "Staff Sign In Successfully"});

                console.log(res.status.error);

                // res.json({StaffLogin: {

                //     _id : StaffLogin._id,

                // }})

            }else{

                res.status(400).json({error: "Invalid Credientials"});

            }
        }catch(err){



        console.log(err);

    }

});

module.exports = router;





