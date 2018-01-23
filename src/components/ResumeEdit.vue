<template>
  <div class="resume">
    
    <custom-nav />
    <b-container class="bv-example-row">
    <b-card title="EDIT RESUME" tag="article">
    
    <h5 style="text-align: left;">SUMMARY</h5>
    <b-form-textarea id="summary"
                     v-model="resume.summary"
                     placeholder=""
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
    
    <h5 style="text-align: left;">SKILLS</h5>
    <b-form-textarea id="education"
                     v-model="resume.skills"
                     placeholder=""
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
    
    <h5 style="text-align: left;">EXPERIENCE</h5>
    <b-form-textarea id="history"
                     v-model="resume.history"
                     placeholder=""
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>

    <h5 style="text-align: left;">EDUCATION</h5>
    <b-form-textarea id="hobbies"
                     v-model="resume.education"
                     placeholder=""
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
    
    <h5 style="text-align: left;">ADDICTIONAL ACTIVITIES</h5>
    <b-form-textarea id="hobbies"
                     v-model="resume.hobbies"
                     placeholder=""
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
    
  
    <b-button v-on:click="save">Save</b-button>
  </b-card>
  </b-container>
  </div>
</template>

<script>

import json from '../../static/json/resumes.json'

export default {
  name: 'ResumeEdit',
  data () {
    return {
      msg: this.name,
      index: this.$route.params.id - 1,
      resume: json.resumes[this.$route.params.id - 1]
    }
  },
  methods: {
    save: function (event) {
      alert('Summary: ' + this.summary)
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
