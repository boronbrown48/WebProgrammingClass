//src/components/Main.vue
<template>
  <div>
    <div class="container-fluid">
        <h1>List of Drugs</h1>
        <div class="border" style="padding: 15px">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Drug Name</th>
                <th scope="col">Dose</th>
                <th scope="col">Package</th>
                <th scope="col">Unit</th>
                <th scope="col">Method</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <th>drug id</th>
                <td><img src="../assets/img/default.jpg" width="40"></td>
                <td>drug name</td>
                <td>drug dose</td>
                <td>drug package</td>
                <td>drug unit</td>
                <td>
                  <button type="button" class="btn btn-info" >Detail</button>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import drugsJson from '../drugs.json'

export default {
  name: 'Main',
  data () {
    return {
      drugs: []
    }
  },
  created() {
    console.log(drugsJson)
  },
  mounted() {
    
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #42b983;
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