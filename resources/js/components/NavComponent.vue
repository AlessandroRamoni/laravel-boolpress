<template>
    <div>
        <nav>
            <ul>
                <!-- <li>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">Chi siamo</router-link>
                    <router-link to="/contacts">Contatti</router-link>
                </li> -->
                <li v-for="link, index in nav" :key="index">
                    <router-link :to="link.path">{{ link.label }}</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>


export default {
    name: 'NavComponent',
    props: {
        nav: Array
    },
};
</script>

<style scoped lang="scss">
ul {
    list-style: none;
    display: flex;

    li {
        padding-top: 10px;
        padding-left: 10px;
    }
}
</style>
