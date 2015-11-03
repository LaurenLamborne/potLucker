var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: {required: true, type: String},
  created: Date,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  potluck: { type: mongoose.Schema.Types.ObjectId, ref: "Potluck" }
});

mongoose.model('Comment', CommentSchema);
