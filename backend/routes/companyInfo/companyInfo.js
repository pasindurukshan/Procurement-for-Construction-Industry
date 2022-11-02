const express = require("express");
const companyInfo = require("../../models/companyInfo/companyInfo");


const router = express.Router();

//save student

router.post("/companyInfo/save",(req,res)=>{
    
    let newcompanyInfo = new companyInfo(req.body);

    newcompanyInfo.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err,
            });
        }
        return res.status(200).json({
            success:"companyInfo saved successfully"
        });
    });
});


//get student

router.get('/companyInfo',(req,res) =>{
    companyInfo.find().exec((err,companyInfo) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingorder:companyInfo
        });
    });
});

//get a specific student
router.get("/companyInfo/:id",(req,res) =>{

    let siteId = req.params.id;

    order.findById(siteId, (err, companyInfo) => {
      if (err) {
        return res.status(400).json({success:false, err });
      }
      return res.status(200).json({
        success: true,
        companyInfo
      });
    });

});


//update student

router.put('/companyInfo/update/:id',(req,res)=>{
    companyInfo.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        (err,companyInfo)=>{
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

    router.delete("/companyInfo/delete/:id",(req,res) =>{
        companyInfo.findByIdAndRemove(req.params.id).exec((err,deletedorder) =>{
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
