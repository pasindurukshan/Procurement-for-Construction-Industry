const express = require("express");
const projectInfo = require("../../models/projectInfo/project_info");

const router = express.Router();
//save posts

router.post("/projectInfo/save", (req, res) => {
  let newprojectInfo = new projectInfo(req.body);

  newprojectInfo.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "projectInfo saved successfully",
    });
  });
});

//get posts
router.get("/projectInfo", (req, res) => {
    projectInfo.find().exec((err, projectInfo) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: projectInfo,
    });
  });
});

//get a specific post
router.get("/projectInfo/:id", (req, res) => {
  let siteId = req.params.id;

  projectInfo.findById(siteId, (err, projectInfo) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      projectInfo,
    });
  });
});

//update posts
router.put("/projectInfo/update/:id", (req, res) => {
    projectInfo.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, projectInfo) => {
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
router.delete("/projectInfo/delete/:id", (req, res) => {
  projectInfo.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsuccesful",
        err,
      });

    return res.json({
      message: "Delete Succesful",
      deletedPost,
    });
  });
});

//Enrol



module.exports = router;

