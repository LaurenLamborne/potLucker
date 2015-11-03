var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Potluck = mongoose.model('Potluck');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');

var jwt = require('express-jwt');
var auth = jwt({
  userProperty: "payload", //req.payload._id in the Route
  secret: "PleaseWork" //matches the secret in model
   });

router.post('/', auth, function(req, res, next) {
    console.log(req.payload._id);
    var potluck = new Potluck(req.body);
    potluck.createdBy = req.payload._id;
    potluck.date = new Date();
    // potluck.community = req.params.comID;
    potluck.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next("Could not Create");
    res.send(result);
  });
});

router.get('/', function(req, res, next) {
  Potluck
  .find({})
  // .select('topic createdBy')
  // .populate('createdBy', 'username')
  .exec(function(err, result) {
    if(err) return next(err);
    res.send(result);
  });
});

router.get('/:id', function(req, res, next){
  Potluck.findOne({_id: req.params.id}, function(err, result){
    if(err) {return next(err);}
    if(!result) {return next({err: "Error finding potluck by ID."});}
    res.send(result);
  });
});

router.get('/edit/:id', function(req, res, next){
  Potluck.findOne({_id: req.params.id}, function(err, result){
    if(err) {return next(err);}
    if(!result) {return next({err: "Error finding potluck by ID."});}
    res.send(result);
  });
});

router.delete('/:id', auth, function(req, res, next) {
  Potluck.remove({_id: req.params.id}, function(err, result) {
      if(err) return next(err);
      console.log(result);
      res.send();
  });
});

router.put('/', auth, function (req, res, next) {
  //Mongoose/Mongo method '.update' takes an object for the search as the first param
  //The second param is an object which is the info to update with
  // req.body.recipeEditted.id = req.body.recipeEditted._id;
  Potluck.update({_id: req.body.potluckEditted._id}, req.body.potluckEditted, function (err, result) {
    //Checks for both error cases: server error and no post found
    if(err) return next(err);
    if(!result) return next({err: "The post wasn't found for updating"});
    res.send(result);
  });
});

router.get('/profile/:id', function(req, res, next){
  // var sendBack ={};
  Potluck.find({createdBy:req.params.id})
  .exec(function(err, result){
    if(err) return next(err);
    if(!result) return next('Could not find request');
    sendBack.communities = result;

  // Recipe.find({createdBy:req.params.id})
  // .exec(function(err, result){
  //   if(err) return next(err);
  //   if(!result) return next('Could not find request');
  //   sendBack.recipes = result;
  //   res.send(sendBack);
  // });
});
});

router.post('/:id/comment', auth, function(req, res, next) {
  var comment = {
    body: req.body.body,
    user: req.payload._id,
    // posted: req.payload.username,
    date: req.body.date,
  };
  console.log(req.payload);

  Potluck.findOne({_id: req.params.id}, function(err, potluck) {
    if(err) return next(err);
    if(!potluck) return next("Could not find that potluck.");
    potluck.comments.push(comment);
    potluck.save(function(err, potluck) {
      res.send(potluck);
    });
  });
});








 module.exports = router;
