<template>
    <div>
        <h2>Articles</h2>
        <router-link to="/create" class="btn btn-primary">Créer un Nouvel Article</router-link>
        <ul class="list-group mt-3">
        <li v-for="article in articles" :key="article.id" class="list-group-item d-flex justify-content-between align-items-center">
            <router-link :to="`/articles/${article.id}`">{{ article.title }}</router-link>
            <div>
            <router-link :to="`/edit/${article.id}`" class="btn btn-sm btn-warning mr-2">Modifier</router-link>
            <button @click="deleteArticle(article.id)" class="btn btn-sm btn-danger">Supprimer</button>
            </div>
        </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ArticleList',
    data() {
        return {
        articles: []
        };
    },
    created() {
        this.fetchArticles();
    },
    methods: {
        fetchArticles() {
        axios.get('http://localhost:3000/api/articles')
            .then(response => {
            this.articles = response.data;
            })
            .catch(error => {
            console.error('Erreur lors de la récupération des articles:', error);
            });
        },
        deleteArticle(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
            axios.delete(`http://localhost:3000/api/articles/${id}`)
            .then(() => {
                this.fetchArticles();
            })
            .catch(error => {
                console.error('Erreur lors de la suppression de l\'article:', error);
            });
        }
        }
    }
};
</script>

<style scoped>
.btn {
    margin-right: 5px;
}
</style>
