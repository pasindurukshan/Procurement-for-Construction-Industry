const express = require('express');
const malabe_s112_inventory = require('../../models/malabe_s112_inventory/malabe_s112_inventory');

const router = express.Router();

//save payment

router.post('/inventory/save',(req,res)=>{
    
    let newmalabe_s112_inventory = new malabe_s112_inventory(req.body);

    newmalabe_s112_inventory.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Inventory saved successfully"
        });
    });
});

//get payment

router.get('/inventory',(req,res) =>{
    malabe_s112_inventory.find().exec((err,malabe_s112_inventory) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingpayment:malabe_s112_inventory
        });
    });
});

//get a specific payment
router.get("/inventory/:id",(req,res) =>{

    let itemId = req.params.id;

    malabe_s112_inventory.findById(itemId, (err, payment) => {
      if (err) {
        return res.status(400).json({success:false, err });
      }
      return res.status(200).json({
        success: true,
        malabe_s112_inventory
      });
    });

});


//update payment

router.put('/inventory/update/:id',(req,res)=>{
    malabe_s112_inventory.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        (err,malabe_s112_inventory)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succefully"
            });
        }
    );
    });


    //delete payment

    router.delete("/inventory/delete/:id",(req,res) =>{
        malabe_s112_inventory.findByIdAndRemove(req.params.id).exec((err,deletedpayment) =>{
                if(err) return res.status(400).json({
                    message:"deleted unsuccesfull",err
                });
                return res.json({
                    message:"Delete Succesfull",deletedpayment
            });
    });
});

module.exports = router;