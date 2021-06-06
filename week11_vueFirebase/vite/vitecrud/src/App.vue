<template>
<div>

<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
    EGCO427
    <router-link to="/users">List of Users</router-link>
    <button class="btn btn-success" @click="logout">Log Out</button>
  </a>
</nav>
  <router-view/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import firebase from 'firebase'
export default {
  name: 'App',
  components: {
    HelloWorld 
  },
  methods:{
    logout(){
      firebase.auth().signOut()
      .then(()=>{
        this.$router.replace('/signin')
      })
      .catch((e)=>{
        alert(e.message)
      })
    }
  }
}
</script>
