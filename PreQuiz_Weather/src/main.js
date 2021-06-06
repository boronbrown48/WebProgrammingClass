import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import firebase from 'firebase'
let app
var firebaseConfig = {
    apiKey: "AIzaSyD8Ws2QydAKwyjsxlzvbrrVbwvmDq6gmBU",
    authDomain: "weather-practice-d16a8.firebaseapp.com",
    databaseURL: "https://weather-practice-d16a8-default-rtdb.firebaseio.com",
    projectId: "weather-practice-d16a8",
    storageBucket: "weather-practice-d16a8.appspot.com",
    messagingSenderId: "569385414636",
    appId: "1:569385414636:web:1cb00a65cbd1bfe0609ac9",
    measurementId: "G-H95381SVMR"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().onAuthStateChanged((user)=>{
    if(!app){
        app=createApp(App).use(router).mount('#app')
    }

})