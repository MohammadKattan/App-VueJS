import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import ArticleView from '../views/ArticleView.vue';
import CreateArticle from '../views/CreateArticle.vue';
import EditArticle from '../views/EditArticle.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
        path: '/',
        name: 'Home',
        component: Home
        },
        {
        path: '/articles/:id',
        name: 'ArticleView',
        component: ArticleView,
        props: true
        },
        {
        path: '/create',
        name: 'CreateArticle',
        component: CreateArticle
        },
        {
        path: '/edit/:id',
        name: 'EditArticle',
        component: EditArticle,
        props: true
        },
        {
        path: '*',
        name: 'NotFound',
        component: NotFound
        }
    ]
});
