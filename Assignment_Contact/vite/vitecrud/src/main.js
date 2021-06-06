import {
    createApp
} from 'vue'
import App from './App.vue'
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'


var app = createApp(App).use(router).mount('#app')

