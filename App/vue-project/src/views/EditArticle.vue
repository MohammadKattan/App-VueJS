<template>
    <div>
        <ArticleForm :id="id" />
    </div>
</template>

<script>
import ArticleForm from '../components/ArticleForm.vue';

export default {
    name: 'EditArticle',
    components: {
        ArticleForm
    },
    props: ['id']
};
</script>
