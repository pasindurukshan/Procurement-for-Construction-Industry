const express = require("express");
const siteList = require("../../models/siteList/siteList");

const router = express.Router();
//save posts

router.post("/siteList/save", (req, res) => {
  let newsiteList = new siteList(req.body);

  newsiteList.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "siteList saved successfully",
    });
  });
});

//get posts
router.get("/siteList", (req, res) => {
    siteList.find().exec((err, siteList) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPost: siteList,
    });
  });
});

//get a specific post
router.get("/siteList/:id", (req, res) => {
  let orderId = req.params.id;

  siteList.findById(orderId, (err, siteList) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      siteList,
    });
  });
});

//update posts
router.put("/siteList/update/:id", (req, res) => {
    siteList.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, siteList) => {
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
router.delete("/siteList/delete/:id", (req, res) => {
    siteList.findByIdAndRemove(req.params.id).exec((err, deletedsiteList) => {
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

