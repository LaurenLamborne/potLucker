var mongoose = require('mongoose');

var PotluckSchema = new mongoose.Schema({
  name: {required: true, type: String},
  location: {required: true, type: String},
  date: {required: true, type: Date},
  time: String,
  details: String,
  dish: [{
    dishName: String,
    broughtBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }],
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comments: [{
      user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
      posted: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
      body: String,
      commentDate: Date
    }]
    // comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
});





mongoose.model('Potluck', PotluckSchema);
