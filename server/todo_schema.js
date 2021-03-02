const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  }, 
  completed: {
    type: Boolean,
    default: false
  }
});
const todo = (module.exports = mongoose.model("todo", todoSchema));
