const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: [true, "Task title is required"],
    trim: true,
    maxlength: [100, "Title cannot exceed 100 characters"]
  },
  description: {
    type: String,
    required: [true, "Task description is required"],
    trim: true,
    maxlength: [500, "Description cannot exceed 500 characters"]
  },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed", "cancelled"],
    default: "pending"
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high", "urgent"],
    default: "medium"
  },
  dueDate: {
    type: Date,
    default: null
  },
  tags: [{
    type: String,
    trim: true
  }],
  isCompleted: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});


const Task = mongoose.model("Task", taskSchema);
module.exports = Task;