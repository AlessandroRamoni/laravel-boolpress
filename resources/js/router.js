import Vue from "vue";

import VueRouter from "vue-router";

import PostsComponent from "./pages/PostsComponent";
import NotFoundComponent from "./pages/NotFoundComponent";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: "/", name: "home", component: PostsComponent},

        // rotta per tutti gli altri percorsi
        {path: "/*", name: 'NotFound', component: NotFoundComponent}
    ],
});

export default router;
