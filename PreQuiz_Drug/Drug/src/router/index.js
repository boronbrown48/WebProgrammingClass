import { createRouter, createWebHistory } from 'vue-router'
import Detail from '../components/Detail.vue'
import MainDrug from '../components/Main.vue'
const routerHistory = createWebHistory()

const routes = [
    {
        path: '/',
        redirect: '/main'
      },
      {
        path: '/:catchAll(.*)',
        redirect: '/main'
      },
    {
        path: '/main',
        name: 'MainDrug',
        component: MainDrug,
    },
    {
        path: '/detail/:drug',
        name: 'Detail',
        component: Detail,
    },
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router