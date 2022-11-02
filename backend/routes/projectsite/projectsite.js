const express = require("express");
const projectsite = require("../../models/projectsite/projectsite");

const router = express.Router();
//save posts

router.post("/site/save", (req, res) => {
  let newprojectsite = new projectsite(req.body);

  newprojectsite.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "projectsite saved successfully",
    });
  });
});

//get posts
router.get("/site", (req, res) => {
  projectsite.find().exec((err, projectsite) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: projectsite,
    });
  });
});

//get a specific post
router.get("/site/:id", (req, res) => {
  let site = req.params.id;

  projectsite.findById(site, (err, projectsite) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      projectsite,
    });
  });
});

//update posts
router.put("/site/update/:id", (req, res) => {
  projectsite.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, projectsite) => {
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
router.delete("/site/delete/:id", (req, res) => {
  projectsite.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
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

