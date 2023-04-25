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
            component: Home,
            meta: {
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: "animate__animated animate__fadeOutRight",
            },
        },
        {
            path: '/MyWork',
            component: MyWork,
            meta: {
                enterClass: "animate__animated animate__fadeInRight",
                leaveClass: "animate__animated animate__fadeOutLeft",
            },
        },
        {
            path: '/links',
            component: Links,
            meta: {
                enterClass: "animate__animated animate__fadeInRight",
                leaveClass: "animate__animated animate__fadeOutLeft",
            },
        },
        {
            path: '/more',
            component: More,
            meta: {
                enterClass: "animate__animated animate__fadeInRight",
                leaveClass: "animate__animated animate__fadeOutLeft",
            },
        },
    ]
})

export default router