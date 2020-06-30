
import Vue from 'vue'
import Router from 'vue-router'
import Landing from "@/vue/pages/Landing";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Landing,
        },
        {
            path: '*',
            redirect: '/    '
        }
    ]
})

export default router
