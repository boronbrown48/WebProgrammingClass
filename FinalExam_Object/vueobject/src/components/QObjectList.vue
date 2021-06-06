<template>
  <div class="objectlist">
    <br />
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">List of Objects</h3>
          </div>
          <div class="panel-body">
          
            <div class="row">
              <div v-for="obj in qobjects" v-bind:key="obj._id" class="col-sm-6 col-md-6">
                <div class="thumbnail">
                  <img :src="`../src/assets/${obj.objtype}.png`" width="100" />
                  <div class="caption">
                    <p><b>{{obj._id}}</b></p>
                    <p>{{obj.objtype}}</p>
                    <p>WxHxD : {{obj.width}}x{{obj.height}}x{{obj.depth}}</p>
                    <router-link :to="`/detail/${obj._id}/${obj.objtype}/${obj.width}/${obj.height}/${obj.depth}`">
                      <button class="btn btn-success" role="button">
                        Detail
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "QObjectList",
  data() {
    return {
      msg: "EGCI427 LabQuiz",
      qobject: null,
      qobjects: {},
    };
  },
  created() {
    axios
      .get("http://localhost:5000/objects")
      .then((response) => {
        console.log(response.data);
        this.qobjects = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
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