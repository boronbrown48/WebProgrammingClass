<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>Add User</h4>
        <div class="form-group">
          <label class="pull-left">First Name: </label>
          <input
            type="text"
            class="form-control"
            placeholder="First Name"
            v-model="User.firstName"
          />
        </div>
        <div class="form-group">
          <label class="pull-left">Last Name: </label>
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            v-model="User.lastName"
          />
        </div>
        <div class="form-group">
          <label class="pull-left">Email: </label>
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            v-model="User.email"
          />
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-large btn-block btn-primary full-width"
        @click="addToAPI"
      >
        Submit
      </button>
      <router-link to="/">
        <button class="btn btn-large btn-block btn-success full-width">
          Go to User List Page
        </button>
      </router-link>
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
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  methods: {
    addToAPI: function () {
      let newUser = {
        firstName: this.User.firstName,
        lastName: this.User.lastName,
        email: this.User.email,
      };
      axios
        .post("http://localhost:5000/users", newUser)
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
