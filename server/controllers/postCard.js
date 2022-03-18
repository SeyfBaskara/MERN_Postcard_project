const { ObjectId } = require('mongoose').Types;
const PostCard = require('../models/postCard');

const createPostCard = async (req, res) => {
  const {
    senderName, receipentName, message, receipentAddress,
  } = req.body;

  const newPostCard = new PostCard({
    senderName, receipentName, message, receipentAddress,
  });

  try {
    await newPostCard.save();
    res.status(201).json(newPostCard);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getPostCards = async (req, res) => {
  try {
    const postCard = await PostCard.find();

    res.status(200).json(postCard);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deletePostCard = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    res.status(404).json({ message: 'Not valid postCard id' });
  }

  try {
    await PostCard.findByIdAndDelete(id);

    res.json({ message: 'PostCard deleted succesfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPostCard,
  getPostCards,
  deletePostCard,
};
