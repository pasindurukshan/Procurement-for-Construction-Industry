const express = require("express");
const Orderpreview = require("../../models/Orderpreview/orderPreview");

const router = express.Router();

//save course

router.post("/orderPreview/save", (req, res) => {
  let newOrderpreview = new Orderpreview(req.body);

  newOrderpreview.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Orderpreview saved successfully",
    });
  });
});

//get course

router.get("/orderPreview", (req, res) => {
  Orderpreview.find().exec((err, Orderpreview) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingcourse: Orderpreview,
    });
  });
});

//get a specific course
router.get("/orderPreview/:id", (req, res) => {
  let orderId = req.params.id;

  course.findById(orderId, (err, course) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      course,
    });
  });
});

//update course

router.put("/orderPreview/update/:id", (req, res) => {
  Orderpreview.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, Orderpreview) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Updated Succefully",
      });
    }
  );
});

//delete course

router.delete("/orderPreview/delete/:id", (req, res) => {
  Orderpreview.findByIdAndRemove(req.params.id).exec((err, deletedcourse) => {
    if (err)
      return res.status(400).json({
        message: "deleted unsuccesfull",
        err,
      });
    return res.json({
      message: "Delete Succesfull",
      deletedcourse,
    });
  });
});

//Enrol

router.post("/Enrol", async (req, res) => {
  try {
    const { courseName, courseID } = req.body;

    if (!courseName || !courseID) {
      return res.status(400).json({ error: "Please fill  all data" });
    }
    //check with database courseName
    const Enrol = await course.findOne({ courseName: courseName });
    //console.log(studentLogin);
    if (!Enrol) {
      res.status(400).json({ error: "Course does not exists" });
    } else if (courseID == Enrol.courseID) {
      res.json({ message: "Course Enrollement  Successfull" });

      console.log(res.status.error);
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
