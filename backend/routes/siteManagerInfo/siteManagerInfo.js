const express = require("express");
const siteManagerInfo = require("../../models/siteManagerInfo/siteManagerInfo");

const router = express.Router();
//save posts

router.post("/siteManagerInfo/save", (req, res) => {
  let newsiteManagerInfo = new siteManagerInfo(req.body);

  newsiteManagerInfo.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "siteManagerInfo saved successfully",
    });
  });
});

//get posts
router.get("/siteManagerInfo", (req, res) => {
    siteManagerInfo.find().exec((err, siteManagerInfo) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPost: siteManagerInfo,
    });
  });
});

//get a specific post
router.get("/siteManagerInfo/:id", (req, res) => {
  let orderId = req.params.id;

  siteManagerInfo.findById(orderId, (err, siteManagerInfo) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      siteManagerInfo,
    });
  });
});

//update posts
router.put("/siteManagerInfo/update/:id", (req, res) => {
    siteManagerInfo.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, siteManagerInfo) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Update unccessfully",
      });
    }
  );
});

//delete post
router.delete("/siteManagerInfo/delete/:id", (req, res) => {
    siteManagerInfo.findByIdAndRemove(req.params.id).exec((err, deletedsiteList) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsuccesful",
        err,
      });

    return res.json({
      message: "Delete Succesful",
      deletedsiteList,
    });
  });
});

//Enrol



module.exports = router;

