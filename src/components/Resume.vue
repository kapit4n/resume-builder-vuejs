<template>
  <div class="resume">
    <custom-nav />
    <b-container class="bv-example-row">
   <b-card :title="profiles[index].name"tag="article">
    <img :src="profiles[index].src" width="50" >
    <h3 style="text-align: left;">Summary {{$route.params.id}}</h3>
    <p class="card-text" style="text-align: left;" v-html="profiles[index].summary">
    </p>
    <h3 style="text-align: left;">Education</h3>
    <p class="card-text" style="text-align: left;" v-html="profiles[index].skills">
    </p>
    <h3 style="text-align: left;">Employment History</h3>
    <p class="card-text" style="text-align: left;" v-html="profiles[index].history">
    </p>
    <h3 style="text-align: left;">Hobbies and Interest</h3>
    <p class="card-text" style="text-align: left;" v-html="profiles[index].hobbies">
    </p>
    <b-button href="#" variant="primary">Edit</b-button>
  </b-card>
  </b-container>
  </div>
</template>

<script>

import json from '../../static/json/resumes.json';

export default {
  name: 'Resume',
  data () {
    return {
      msg: this.name,
      index: this.$route.params.id - 1,
      profiles: json.resumes
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
