const mongoose = require('mongoose');

const postCardSchema = mongoose.Schema({
  senderName: {
    type: String,
    require: true,
  },
  receipentName: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  receipentAddress: {
    type: String,
    require: true,
  },
});

const PostCard = mongoose.model('PostCard', postCardSchema);

module.exports = PostCard;
