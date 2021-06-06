<template>
  <div class="container">
    <h1>List of Users</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for..." v-model="search" />
            <span class="input-group-btn">
              &nbsp;&nbsp;
              
              <router-link to="/adduser">
      <button class="btn btn-success ">
        + Add User
      </button>
    </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <br />

    <div class="row card-columns justify-content-center">
      <div v-for="user_alias in filterUsers" v-bind:key="user_alias.firstname">
          <div class="card" style="width: 250px; height: 480px">
            <img class="card-img-top" :src="user_alias.image" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">
                {{ user_alias.firstname }} {{ user_alias.lastname }}
              </h5>
              <p class="card-text"></p>
              <p>Mobile: {{ user_alias.mobile }}</p>
              <p>email: {{ user_alias.email }}</p>
              
      <router-link :to="{ path:'updateuser', name: 'UpdateUser', params:{userID: user_alias._id} }">
                          <button class="btn btn-xs btn-warning">Edit</button>&nbsp;
                        </router-link> 
    
             <button class="btn btn-xs btn-danger" data-toggle="modal" data-target=".bd-example-modal-sm" @click="DELETE(user_alias._id)"><span class="glyphicon glyphicon-trash">Delete</span></button>
            </div>
          </div>
      </div>
    </div>

    

    <div
      class="modal fade bd-example-modal-sm"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this item?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <router-link to="/users">
              <button
                type="button"
                class="btn btn-danger"
                @click="delUser(uid)"
              >
                Delete
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      Users: [],
      search: "",
      uid: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:5000/contacts")
      .then((response) => {
        console.log(response.data);
        this.Users = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    filterUsers: function () {
      return this.Users.filter((users) => {
        return users.firstname.toLowerCase().match(this.search.toLowerCase())||users.lastname.toLowerCase().match(this.search.toLowerCase());
      });
    }
  },
  methods: {
    
    DELETE(id) {
      this.uid = id;
    },
    delUser(UserId) {
      axios
        .delete("http://localhost:5000/contacts/delete/" + UserId)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      window.location.reload();
    },
  },
};
</script>


<style scoped>
.editbutton {
  color: black;
  font-style: bold;
  background-color: #e2d7b9;
  border: white;
}
.editbutton:hover {
  background-color: #dadada;
}

.deletebutton {
  color: black;
  font-style: bold;
  background-color: #777d63;
  border: white;
}
.deletebutton:hover {
  background-color: #dadada;
}

</style>