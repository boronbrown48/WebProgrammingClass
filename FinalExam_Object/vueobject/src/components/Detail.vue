<template>
  <div class="objectlist">
    <br />
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">Object Detail</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-6 col-md-6" style="text-align: left">
                <p>Object ID: {{ oid }}</p>
                <p>Object Type: {{ calobject.objtype }}</p>
                <p>
                  WxHxD: {{ calobject.width }}x{{ calobject.height }}x{{
                    calobject.depth
                  }}
                </p>
                <p>Area: {{ calobject.area }}</p>
                <p>volume: {{ calobject.volume }}</p>
              </div>
            </div>
            <router-link to="/">
        <button type="button" class="btn btn-info">Back to Main</button>
      </router-link>
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
      calobject: {},
      oid: "",
    };
  },
  created() {
    this.oid = this.$route.params.objid;
    var objtype = this.$route.params.objtype;
    var width = this.$route.params.height;
    var height = this.$route.params.width;
    var depth = this.$route.params.depth;
    var url =
      "http://localhost:5000/calculate/" + objtype +"/" +height +"/" +width +"/" +depth;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        this.calobject = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
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