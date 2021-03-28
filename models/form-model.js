const mongoose = require("mongoose");

const Form = mongoose.model("Form", {
  form_title: String,
  questions: [
    { responseType: String, title: String, response: String },
  ],
  responses: [{ questionId: String, questionContent: String, responseType: String, responseContent: String }],
});

module.exports = Form;


