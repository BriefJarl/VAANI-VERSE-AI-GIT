const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  userId: String,
  title: String,
  category: {
    type: String,
    enum: ["Important & Urgent", "Important", "Normal"],
    default: "Normal"
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending"
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  dateCompleted: Date,
  dueDate: Date
});

module.exports = mongoose.model("Task", taskSchema);