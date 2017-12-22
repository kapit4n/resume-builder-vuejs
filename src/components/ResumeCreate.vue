<template>
  <div class="resume">
    <custom-nav />
    
    <b-container class="bv-example-row">
    <b-card title="New Profile"tag="article">
    
    <h3 style="text-align: left;">Summary {{$route.params.id}}</h3>
    <textarea v-model="summary" placeholder="add multiple lines"></textarea>
    </p>
    
    <h3 style="text-align: left;">Education</h3>
    <textarea v-model="education" placeholder="add multiple lines"></textarea>
    </p>
    
    <h3 style="text-align: left;">Employment History</h3>
    <textarea v-model="history" placeholder="add multiple lines"></textarea>
    </p>
    
    <h3 style="text-align: left;">Hobbies and Interest</h3>
    <textarea v-model="hobbies" placeholder="add multiple lines"></textarea>
    </p>
    
    <b-button href="#" variant="primary">Save</b-button>
  </b-card>
  </b-container>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      msg: this.name
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
