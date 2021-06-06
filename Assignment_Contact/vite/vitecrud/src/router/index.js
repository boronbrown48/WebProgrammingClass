
import {createRouter,createWebHistory} from 'vue-router'
import Users from '../views/Users.vue'
import AddUser from '../views/AddUser.vue'
import UpdateUser from '../views/UpdateUser.vue'
import SignIn from '../views/SignIn.vue'


const rouerHistory = createWebHistory()
const routes = [
    {
        path:'/',
        redirect:'/contacts'
    },
    
    {
        path:'/contacts',
        name: Users,
        component: Users,
       
    },
    {
        path:'/adduser',
        name: AddUser,
        component: AddUser,
        
    },
    {
        path:'/updateuser/:userID',
        name: 'UpdateUser',
        component: UpdateUser,
        
    },
    {
        path:'/signin',
        name: 'SignIn',
        component: SignIn
    },

]

const router = createRouter({
    history: rouerHistory,
    routes
})



export default router