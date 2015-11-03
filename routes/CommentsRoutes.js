// var express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose');
// var Potluck = mongoose.model('Potluck');
// var Comment = mongoose.model('Comment');
// var User = mongoose.model('User');
//
// var jwt = require('express-jwt');
// var auth = jwt({
//   userProperty: "payload", //req.payload._id in the Route
//   secret: "PleaseWork" //matches the secret in model
//    });
//
//    router.param('potId', function(req, res, next, potId) {
//      Blog.findOne({_id: potId}, function(err, result) {
//        if(!result) return res.status(404).send({err: "Could not find that blog."});
//        req.potluck = result;
//        next();
//      });
//    });

//    router.post('/:potId', function(req, res, next) {
//      var comment = new Comment(req.body);
//      comment.created = new Date();
//      comment.potluck = req.potluck._id;
//      comment.save(function(err, commentResult) {
//     if(!commentResult) return res.status(500).send({err: "Whoops"});
//     if(err) return res.status(503).send(err);
//
//     req.potluck.comments.push(commentResult._id);
//     req.potluck.save(function(err, blog) {
//       // console.log(err);
//       // console.log(blog);
//       res.send(commentResult);
//     });
//   });
// });










  //  module.exports = router;
