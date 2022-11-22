<template>
    <div>
        <div v-if="loading">
            Waiting...
        </div>
        <div v-else-if="detail != undefined">
            <h2>Dettagli:</h2>
            <PostComponent :post="detail" />
            <button @click="detail = undefined">Indietro</button>
        </div>
        <div v-else-if="errorMessage.length > 0">
            {{ errorMessage }}
        </div>

        <PostListPaginatedComponent v-else :paginatedPosts="postPageResult" @clickedPost="showPost"
            @requestPage="loadPage" />
    </div>
</template>

<script>

import PostListPaginatedComponent from '../components/PostListPaginatedComponent.vue';

export default {
    name: 'PostsIndexComponent',
    data() {
        return {
            postPageResult: undefined,
            loading: true,
            errorMessage: '',
            detail: undefined
        }
    },
    mounted() {
        this.loadPage('/api/posts')
    },
    methods: {
        loadPage(url) {
            axios.get(url).then(({ data }) => {
                if (data.success) {
                    this.postPageResult = data.results;
                } else {
                    this.errorMessage = data.error;
                }
                this.loading = false
            }).catch(e => {
                console.log(e);
            })
        },
        showPost(id) {
            console.log('hai cliccato')
        }
    },
    components: {
        PostListPaginatedComponent
    }
}
</script>

<style scoped lang="scss">

</style>
