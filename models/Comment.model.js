const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  recipe: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Recipe", 
    required: true 
  },
  text: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
