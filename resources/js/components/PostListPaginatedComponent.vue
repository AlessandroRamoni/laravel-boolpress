<template>
    <div v-if="posts.length > 0">
        <div class="mt-20 " v-for="post in posts" :key="post.id">
            <span @click="showPost(post.slug)">{{ post.title }}</span>
        </div>

        <div class="my-2">
            Post totali: {{ totalRecords }}
        </div>

        <div class="my-2">

            <button :class="{ disable: currentPage === 1 }" @click="go(paginatedPosts.first_page_url, 1)">Prima</button>
            <button :class="{ disable: !paginatedPosts.prev_page_url }"
                @click="go(paginatedPosts.prev_page_url, currentPage - 1)">Indietro</button>
            {{ currentPage }}/{{ totalPages }}
            <button :class="{ disable: !paginatedPosts.next_page_url }"
                @click="go(paginatedPosts.next_page_url, currentPage + 1)">Avanti</button>
            <button :class="{ disable: currentPage === totalPages }"
                @click="go(paginatedPosts.last_page_url, totalPages)">Ultima</button>

        </div>

    </div>
    <div v-else>
        Nessun post da visualizzare, are you sure?
    </div>
</template>

<script>



export default {
    name: 'PostListPaginatedComponent',
    computed: {
        posts() {
            return this.paginatedPosts.data;
        },
        currentPage() {
            return this.paginatedPosts.current_page;
        },
        totalPages() {
            return this.paginatedPosts.last_page;
        },
        totalRecords() {
            return this.paginatedPosts.total;
        }
    },
    props: {
        paginatedPosts: Object
    },
    methods: {
        showPost(slug) {
            this.$emit('clickedPost', slug);
        },
        go(url, pageNumber) {

            console.log('url:', url);
            if (url) {
                this.$router.push({ path: '/posts', query: { page: pageNumber } })
                this.$emit('requestPage', url)
            }

        }
    }
}
</script>

<style scoped lang="scss">
.mt-20 {
    margin-top: 20px;
}

button.disable {
    opacity: 0.5;
    pointer-events: none;
}
</style>





<!-- <template>
    <div>
        <div v-if="posts.length > 0">
            <div style="margin-bottom: 20px" v-for="post in posts" :key="post.id">
                <span @click="showPost(post.id)">{{ post.title }}</span>
            </div>
        </div>

        <div v-else>
            Nessun post trovato, are you sure?
        </div>

        <div class="my3">
            <button @click="go(paginatedPosts.prev_page_url)">Indietro</button>
            {{ currentPage }}/{{ totalPages }}
            <button @click="go(paginatedPosts.next_page_url)">Avanti</button>
        </div>
    </div>

</template>

<script> -->


export default {
    name: 'PostListPaginatedComponent',
    // data() {
    //     return {
    //         posts: []
    //     }
    // },
    computed: {
        posts() {
            return this.paginatedPosts.data;
        },
        currentPage() {
            return this.paginatedPosts.current_page;
        },
        totalPages() {
            return this.paginatedPosts.total;
        }
    },
    props: {
        paginatedPosts: Object
    },
    methods: {
        showPost(id) {
            console.log('ciao');
            this.$emit('clickedPost', id);

        },
        go(url) {
            this.$emit('requestPage', url);
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
