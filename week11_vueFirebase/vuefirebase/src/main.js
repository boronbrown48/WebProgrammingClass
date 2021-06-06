import {
    createApp
} from 'vue'
import App from './App.vue'
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/index.js'
import firebase from 'firebase'

let app
var firebaseConfig = {
    apiKey: "AIzaSyBs4_wI2Xv3Smw2nzqhpXdk9jPu3wMLU8M",
    authDomain: "egco427-a9d0b.firebaseapp.com",
    projectId: "egco427-a9d0b",
    storageBucket: "egco427-a9d0b.appspot.com",
    messagingSenderId: "844280007187",
    appId: "1:844280007187:web:f765052000fb5301ce4de6",
    measurementId: "G-QP06EW99FJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().onAuthStateChanged((user)=>{
    if(!app){
        app=createApp(App).use(router).mount('#app')
    }

})

