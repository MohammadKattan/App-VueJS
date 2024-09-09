<template>
    <div>
        <h2>{{ isEdit ? 'Modifier l\'Article' : 'Créer un Nouvel Article' }}</h2>
        <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="title">Titre</label>
            <input v-model="article.title" type="text" class="form-control" id="title" required>
        </div>
        <div class="form-group">
            <label for="author">Auteur</label>
            <input v-model="article.author" type="text" class="form-control" id="author" required>
        </div>
        <div class="form-group">
            <label for="content">Contenu</label>
            <textarea v-model="article.content" class="form-control" id="content" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">{{ isEdit ? 'Mettre à Jour' : 'Créer' }}</button>
        <router-link to="/" class="btn btn-secondary ml-2">Annuler</router-link>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ArticleForm',
    props: ['id'],
    data() {
        return {
        article: {
            title: '',
            author: '',
            content: ''
        }
        };
    },
    computed: {
        isEdit() {
        return !!this.id;
        }
    },
    created() {
        if (this.isEdit) {
        this.fetchArticle();
        }
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
        },
        submitForm() {
        if (this.isEdit) {
            axios.put(`http://localhost:3000/api/articles/${this.id}`, this.article)
            .then(() => {
                this.$router.push('/');
            })
            .catch(error => {
                console.error('Erreur lors de la mise à jour de l\'article:', error);
            });
        } else {
            axios.post('http://localhost:3000/api/articles', this.article)
            .then(() => {
                this.$router.push('/');
            })
            .catch(error => {
                console.error('Erreur lors de la création de l\'article:', error);
            });
        }
        }
    }
};
</script>
