import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/contacts',
            component: () => import('./views/Contacts.vue')
        },
    ]
})