import Vue from "vue";

import VueRouter from "vue-router";

import PostsComponent from "./pages/PostsComponent";
import NotFoundComponent from "./pages/NotFoundComponent";
import AboutComponent from "./pages/AboutComponent";
import ContactsComponent from "./pages/ContactsComponent";
import HomeComponent from "./pages/HomeComponent";
import PostsIndexComponent from "./pages/PostsIndexComponent";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: "/", name: "home", component: HomeComponent},

        {
            path: "/postsprops: route => ({ query: route.query.q })",
            name: "posts-index",
            component: PostsIndexComponent,
            props: (route) => ({ page: route.query.page }),

        },
        {path: "/about", name: "about", component: AboutComponent},

        {path: "/contacts", name: "contacts", component: ContactsComponent},




        // rotta per tutti gli altri percorsi, sempre all'ultimo posto
        {path: "/*", name: 'NotFound', component: NotFoundComponent}
    ],
});

export default router;
