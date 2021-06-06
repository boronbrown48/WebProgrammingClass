
import {createRouter,createWebHistory} from 'vue-router'
import Users from '../views/Users.vue'
import About from '../views/About.vue'
import AddUser from '../views/AddUser.vue'
import UpdateUser from '../views/UpdateUser.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import firebase from 'firebase'
const rouerHistory = createWebHistory()
const routes = [
    {
        path:'/',
        redirect:'/users'
    },
    {
        path:'/:catchAll(.*)',
        redirect: '/signin'
    },
    {
        path:'/users',
        name: Users,
        component: Users,
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/about',
        name: About,
        component: About,
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/adduser',
        name: AddUser,
        component: AddUser,
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/updateuser/:userID',
        name: 'UpdateUser',
        component: UpdateUser,
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path:'/signup',
        name: SignUp,
        component: SignUp
    }
]

const router = createRouter({
    history: rouerHistory,
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && !currentUser) {
      console.log("You are not authorized to access this area.");
      next('signin')
    } else if (!requiresAuth && currentUser) {
      console.log("You are authorized to access this area.");
      next('movies')
    } else {
      next()
    }
  })

export default router