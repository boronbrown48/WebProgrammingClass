<template>
<div>

<nav class="navbar navbar-dark"  >
  <a class="navbar-brand"  href="#">
    <img src="./assets/icon.png" style="margin-right: 7px" width="30" height="30" class="d-inline-block align-top" alt="">
    CONTACT
  </a>
  <button class="btn btn-success" @click="logout()">Log Out</button>
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
      window.location = '/signin'
    }
  }
}
</script>

<style scoped>
.navbar{
  background-color: #564C2C;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.btn-success{
  color:black;
  font-style: bold;
  background-color: #E2D7B9;
  border: white;
}
.btn-success:hover{
  background-color:#777D63;
}
</style>