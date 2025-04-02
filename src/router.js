
import { createRouter,createWebHashHistory } from 'vue-router';
import home from '_c/home.vue';

const routes = [
    {
        path: '/',
        component: home
    }
];

const Router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default Router;