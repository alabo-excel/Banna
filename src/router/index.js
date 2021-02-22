import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [{
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router