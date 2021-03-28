const express = require("express");
const router = express.Router();

//IMPORT MODEL
const Form = require("../models/form-model");

//CREATE
router.post("/create", async (req, res) => {
  try {
    const newForm = new Form({
      form_title: req.fields.form_title,
      questions: req.fields.questions,
      responses: req.fields.responses,
    });
    await newForm.save();
    return res.json({ message: "Form successfully created" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//CREATE TEST
// router.post("/create", async (req, res) => {
//   res.json({message: req.fields})
//   });

// READ

// Get all forms
router.get("/", async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Get data of one specific form
router.get("/form/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    return res.json(form);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//UPDATE
router.post("/update", async (req, res) => {
  try {
    const form = await Form.findOne({ _id: req.fields._id });
    form.form_title = req.fields.form_title;
    form.questions = req.fields.questions;
    form.responses = req.fields.responses;

    await form.save();

    return res.json({ message: "Form updated" });
    // return res.json(req.fields);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//DELETE
router.post("/delete/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    await form.deleteOne();
    return res.json({ message: "Form deleted" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
