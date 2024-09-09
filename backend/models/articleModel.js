const fs = require('fs');
const filePath = './backend/articles.json';

const getArticles = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Erreur de lecture du fichier JSON:', err);
        return [];
    }
};

const saveArticles = (articles) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(articles, null, 2));
    } catch (err) {
        console.error('Erreur d\'écriture dans le fichier JSON:', err);
    }
};

const getArticleById = (id) => {
    const articles = getArticles();
    return articles.find(article => article.id === id);
};

const updateArticle = (id, updatedArticle) => {
    const articles = getArticles();
    const index = articles.findIndex(article => article.id === id);
    if (index !== -1) {
        articles[index] = { ...articles[index], ...updatedArticle };
        saveArticles(articles);
        return articles[index];
    }
    return null;
};

const deleteArticle = (id) => {
    let articles = getArticles();
    articles = articles.filter(article => article.id !== id);
    saveArticles(articles);
    return articles;
};

module.exports = { getArticles, saveArticles, getArticleById, updateArticle, deleteArticle };
