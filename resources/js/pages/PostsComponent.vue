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

        <!-- <PostListComponent v-else :posts="posts" @clickedPost="showPost" /> -->

        <PostListPaginatedComponent v-else :paginatedPosts="posts" @clickedPost="showPost" @requestPage="loadPage" />


        <!-- <div v-else-if="posts.length > 0">
            <div v-for="post in posts" :key="post.id">
                <span @click="showPost(post.id)">{{ post.title }}</span>
            </div>
        </div>

        <div v-else>
            Nessun post trovato, are you sure?
        </div> -->
    </div>

</template>

<script>

import PostComponent from '../components/PostComponent.vue'
import PostListComponent from '../components/PostListComponent.vue'
import PostListPaginatedComponent from '../components/PostListPaginatedComponent.vue'

export default {
    name: 'PostsComponent',
    components: {
        PostComponent,
        PostListComponent,
        PostListPaginatedComponent
    },
    data() {
        return {
            // posts: [],
            posts: undefined,
            errorMessage: '',
            loading: true,
            detail: undefined
        }

    },
    mounted() {
        console.log('PostsComponent presente');



        // axios.get('/api/posts').then(({ data }) => {
        //     if (data.success) {
        //         this.posts = data.results;
        //     } else {
        //         this.errorMessage = data.error;
        //     }
        //     this.loading = false
        // })

        this.loadPage('/api/posts')

    },
    methods: {
        loadPage(url) {
            axios.get(url).then(({ data }) => {
                if (data.success) {
                    this.posts = data.results;
                } else {
                    this.errorMessage = data.error;
                }
                this.loading = false
            })
        },
        showPost(id) {
            console.log(id);
            this.loading = true;
            axios.get('api/posts/' + id)
                .then(response => {
                    console.log(response);
                    this.detail = response.status == 200 ? response.data.results : undefined;
                    console.log(this.detail);
                    console.log(response.data.success);
                    console.log(response.status);
                    this.loading = false;
                })
                .catch(e => {
                    console.log('errore', e);
                    this.loading = false;
                })
        },
        showList() {
            this.detail = undefined
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
