const express = require('express');
const { createPostCard, getPostCards, deletePostCard } = require('../controllers/postCard');

const router = express.Router();

router.get('/', getPostCards);
router.post('/', createPostCard);
router.delete('/:id', deletePostCard);

module.exports = router;
