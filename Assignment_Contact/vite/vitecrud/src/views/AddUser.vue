<template>
  <div class="container">
    <form>
      <div class="card">
        <h5 class="card-header">Add User</h5>
        <div class="card-body">
          <div class="form-group">
            <label class="pull-left">First Name</label>
            <label style="color: red">*</label>
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              v-model="User.firstname"
            />
          </div>
          <div class="form-group">
            <label class="pull-left">Last Name</label>
            <label style="color: red">*</label>
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              v-model="User.lastname"
            />
          </div>
          <div class="form-group">
            <label class="pull-left">Gender</label>
            <input type="text" class="form-control" placeholder="M or F" v-model="User.gender"/>
          </div>
          <div class="form-group">
            <label class="pull-left">Mobile No</label>
            <label style="color: red">*</label>
            <input type="text" class="form-control" placeholder="Mobile No" v-model="User.MobileNo"/>
          </div>
          <div class="form-group">
            <label class="pull-left">Email</label>
            <input type="text" class="form-control" placeholder="Email" v-model="User.email"/>
          </div>
          <div class="form-group">
            <label class="pull-left">Image URL</label>
            <input type="text" class="form-control" placeholder="Image URL" v-model="User.image" />
          </div>
          <button type="submit" class="btn btn-primary" @click="addToAPI">
            Submit
          </button>
          <router-link to="/">
            <button class="btn btn-primary">Go to User List Page</button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "Users",
  components: {
    HelloWorld,
  },
  data() {
    return {
      User: {
        firstname: "",
        lastname: "",
        email: "",
        gender:"",
        MobileNo:"",
        image:""
      },
    };
  },
  methods: {
    addToAPI: function () {
  
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
      axios
        .post("http://localhost:5000/contacts/add", newUser)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
