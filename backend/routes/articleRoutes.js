const express = require('express');
const { getAllArticles, getSingleArticle, createArticle, updateExistingArticle, deleteExistingArticle } = require('../controllers/articleController');
const router = express.Router();

router.get('/', getAllArticles);
router.get('/:id', getSingleArticle);
router.post('/', createArticle);
router.put('/:id', updateExistingArticle);
router.delete('/:id', deleteExistingArticle);

module.exports = router;
