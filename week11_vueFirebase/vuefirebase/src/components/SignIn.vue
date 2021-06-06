<template>
  <div class="container">
    <div class="row">
        <h2>Signin</h2>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
            <input type="email" v-model="formData.email" class="form-control" placeholder="email">
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password">
            <br>
            <button class="btn btn-success btn-block full-width" @click="signIn">Signin</button>
        </div>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="btn-group">
          <button type="button" class="btn btn-primary">Facebook</button>
          <button type="button" class="btn btn-warning" @click="signInGoogle">Google</button>
          <button type="button" class="btn btn-info">Twitter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'SignIn',
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.formData.email, this.formData.password)
        .then(user => {
          this.$router.replace('/movies')
        })
        .catch(e => {
          alert(e.message)
        })
    },
    signInGoogle () {
      var provider = new firebase.auth.GoogleAuthProvider()
      // firebase.auth().signInWithRedirect(provider).then((result) =>  {
      firebase.auth().signInWithPopup(provider).then((result) =>  {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        // console.log(user)
        this.$router.replace('/movies')
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      })
    }
  },
  created () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>