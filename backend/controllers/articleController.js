const { getArticles, saveArticles, getArticleById, updateArticle, deleteArticle } = require('../models/articleModel');

const getAllArticles = (req, res) => {
    const articles = getArticles();
    res.send(articles);
};

const getSingleArticle = (req, res) => {
    const article = getArticleById(req.params.id);
    if (article) {
        res.send(article);
    } else {
        res.status(404).send({ message: 'Article non trouvé' });
    }
};

const createArticle = (req, res) => {
    const articles = getArticles();
    const newArticle = { ...req.body, id: Date.now().toString(), createdAt: new Date() };
    articles.push(newArticle);
    saveArticles(articles);
    res.status(201).send(newArticle);
};

const updateExistingArticle = (req, res) => {
    const updatedArticle = updateArticle(req.params.id, req.body);
    if (updatedArticle) {
        res.send(updatedArticle);
    } else {
        res.status(404).send({ message: 'Article non trouvé' });
    }
};

const deleteExistingArticle = (req, res) => {
    const articles = deleteArticle(req.params.id);
    res.send({ message: 'Article supprimé', articles });
};

module.exports = { getAllArticles, getSingleArticle, createArticle, updateExistingArticle, deleteExistingArticle };
