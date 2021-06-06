<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>Update User</h4>
        <div class="form-group" >
          <label class="pull-left">First Name: </label>
          <input type="text" class="form-control" placeholder="First Name" v-model="User.firstname" required>
        </div>
        <div class="form-group" >
          <label class="pull-left">Last Name: </label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="User.lastname" required>
        </div>
        <div class="form-group">
            <label class="pull-left">Gender</label>
            <input type="text" class="form-control" placeholder="M or F" v-model="User.gender"/>
          </div>
          <div class="form-group">
            <label class="pull-left">Mobile No</label>
            <label style="color: red">*</label>
            <input type="text" class="form-control" placeholder="Mobile No" v-model="User.mobile"/>
          </div>
          <div class="form-group">
            <label class="pull-left">Email</label>
            <input type="text" class="form-control" placeholder="Email" v-model="User.email"/>
          </div>
          <div class="form-group">
            <label class="pull-left">Image URL</label>
            <input type="text" class="form-control" placeholder="Image URL" v-model="User.image" />
          </div>
       
      </div>
      <router-link to="/">
        <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="updateToAPI">Submit</button>
        <button class="btn btn-large btn-block btn-success full-width">Back to User Page</button>
      </router-link>
    </form>
  </div>  
</template>

<script>
import axios from 'axios'
export default {
    name: 'UpdateUser',
    data() {
        return {
            User: {
        firstname: "",
        lastname: "",
        email: "",
        gender:"",
        mobile:"",
        image:""
      },
        } 
    },
    methods: {
        updateToAPI(){
           // console.log(this.$route.params.userId)
            let newUser = {
        firstname:this.User.firstname,
        lastname:this.User.lastname,
        username:"",
        password:"",
        gender:this.User.gender,
        email:this.User.email,
        mobile:this.User.MobileNo,
        image:this.User.image
      };
            axios.post('http://localhost:5000/contacts/update/'+this.$route.params.userID, newUser)
                .then((response)=>{
                    console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    },
    mounted() {
        //console.log(this.$route.params.userID)
        axios.get('http://localhost:5000/contacts/'+this.$route.params.userID)
            .then((response)=>{
                //console.log(response.data)
                this.User = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
    },
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
