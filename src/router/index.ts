import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import MyWork from '../components/MyWork.vue'
import Links from '../components/Links.vue'
import More from '../components/More.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/MyWork',
            component: MyWork
        },
        {
            path: '/links',
            component: Links
        },
        {
            path: '/more',
            component: More
        },
    ]
})

export default router