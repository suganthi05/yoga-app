var express = require("express");
var router  = express.Router({mergeParams: true});
var Yoga = require("../models/yoga");
var Comment = require("../models/comment");
var middleware = require("../middleware");

//Comments New
router.get("/new", middleware.isLoggedIn, function(req, res){
    // find campground by id
    console.log(req.params.id);
    Yoga.findById(req.params.id, function(err, yoga){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {yoga: yoga});
        }
    });
});

//Comments Create
router.post("/",middleware.isLoggedIn,function(req, res){
   //lookup campground using ID
   Yoga.findById(req.params.id, function(err, yoga){
       if(err){
           console.log(err);
           res.redirect("/yoga");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               //add username and id to comment
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               //save comment
               comment.save();
               yoga.comments.push(comment);
               yoga.save();
               console.log(comment);
               req.flash('success', 'Created a comment!');
               res.redirect('/yoga/' + yoga._id);
           }
        });
       }
   });
});

router.get("/:commentId/edit", middleware.isLoggedIn, function(req, res){
    // find campground by id
    Comment.findById(req.params.commentId, function(err, comment){
        if(err){
            console.log(err);
        } else {
             res.render("comments/edit", {yoga_id: req.params.id, comment: comment});
        }
    });
});

router.put("/:comment_id", function(req, res){
   Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, comment){
       if(err){
           res.render("edit");
       } else {
           res.redirect("/yoga/" + req.params.id);
       }
   });
});

// COMMENT DESTROY ROUTE
router.delete("/:comment_id", middleware.checkCampgroundOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
      if(err){
          res.redirect("/yoga");
      } else {
          req.flash("success", "Comment deleted");
          res.redirect("/yoga/" + req.params.id);
      }
   });
});

module.exports = router;