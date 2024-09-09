<template>
    <div>
        <h2>{{ article.title }}</h2>
        <p><strong>Auteur:</strong> {{ article.author }}</p>
        <p><strong>Date de création:</strong> {{ formattedDate }}</p>
        <div v-html="article.content"></div>
        <router-link to="/" class="btn btn-secondary mt-3">Retour à la Liste</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ArticleView',
    props: ['id'],
    data() {
        return {
        article: {}
        };
    },
    computed: {
        formattedDate() {
        return new Date(this.article.createdAt).toLocaleString();
        }
    },
    created() {
        this.fetchArticle();
    },
    methods: {
        fetchArticle() {
        axios.get(`http://localhost:3000/api/articles/${this.id}`)
            .then(response => {
            this.article = response.data;
            })
            .catch(error => {
            console.error('Erreur lors de la récupération de l\'article:', error);
            this.$router.replace('/not-found');
            });
        }
    }
};
</script>
