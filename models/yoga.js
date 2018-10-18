var mongoose = require("mongoose");

var yogaSchema = new mongoose.Schema({
   name: String,
   image: String,
   rating: Number,
   amenities: Array,
   description: String,
   cost: Number,
   location: String,
   lat: Number,
   lng: Number,
   createdAt: { type: Date, default: Date.now },
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Yoga", yogaSchema);