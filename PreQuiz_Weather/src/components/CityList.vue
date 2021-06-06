<template>
  <div class="citylist">
    <h4>EGCO427 Practice</h4>
    <br />
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">List of Cities</h3>
          </div>
          <div class="panel-body">
            <div
              class="col-sm-6 col-md-4"
              v-for="city in cities" :key="city.name" >
              <div class="thumbnail">
                <img :src="`./src/assets/${city.image}`" width="160" />
                <div class="caption">
                  <p>
                    <b>{{ city.name }}</b>
                  </p>
                  <p class="citydetail">{{ city.detail }}</p>
                  <router-link :to="`/info/${city.name}`">
                  <button class="btn btn-success" role="button">Detail</button>
                    </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
    </div>
    <div class="row">
      <div class="container">
        <button @click="logout" class="btn btn-default">
          <span class="glyphicon glyphicon-log-out"></span> Logout
        </button>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "CityList",
  data() {
    return {
      msg: "EGCI427 Practice",
      city: null,
      cities: {},
      editName: [],
    };
  },
  created() {
    console.log("start");
    firebase
      .database()
      .ref("/")
      .on("value", (snapshot) => {
        // console.log(snapshot.val())
        this.cities = snapshot.val();
      });
  },
  methods: {
    logout() {
      console.log("sfdsfds");
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/signin");
        })
        .catch((e) => {
          alert(e.message);
        });
    },
  },
};
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
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #ffffff;
}
p.citydetail {
  text-align: justify;
}
</style>