import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'form-section',
             component: () => import('../views/FormSection.vue')
        },
        {
            path: '/preview',
            name: 'preview',
            component: () => import('../views/Preview.vue')
        }
    ]
})

export default router