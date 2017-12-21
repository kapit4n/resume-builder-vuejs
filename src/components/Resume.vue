<template>
  <div class="resume">
    <b-container class="bv-example-row">

   <b-card :title="profile.name"
        tag="article"
        >
    <img :src="profile.src" width="50" >
    <h3 style="text-align: left;">Summary {{$route.params.id}}</h3>
    <p class="card-text" style="text-align: left;" v-html="profile.summary">
    </p>
    <h3 style="text-align: left;">Education</h3>
    <p class="card-text" style="text-align: left;" v-html="profile.skills">
    </p>
    <h3 style="text-align: left;">Employment History</h3>
    <p class="card-text" style="text-align: left;" v-html="profile.history">
    </p>
    <h3 style="text-align: left;">Hobbies and Interest</h3>
    <p class="card-text" style="text-align: left;" v-html="profile.hobbies">
    </p>
    <b-button href="#" variant="primary">Edit</b-button>
  </b-card>
  </b-container>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      msg: this.$route.params.id,
      profile: {
        src: 'https://customjavadevelopment.files.wordpress.com/2015/11/which-is-better-java-or-scala.jpg',
        name: 'Full Stack Software Developer',
        description: 'I work with python in a ecommerce project by more than one year, I used jinja, javascript, jquery and boostrap with this project combined with python. I love how python simplifies the code.',
        summary: `I have been working on software development professionally since 2004. I like working on web application development, especially on systems requiring complex backends and cryptography. I also have fun working on projects which communicate with or run on custom hardware.<br>

      I have been working in the telecommunication industry and for 5 years I was employed by a large German SmartCard manufacturer.`,
        history: `- Web site and web application development based on Ruby on Rails and recently Elixir/Phoenix<br>
      - Desktop software for Mac and Windows, mostly PDF processing tools<br>
      - Enterprise systems in the Telecommunication industry, based on J2EE technologies<br>
      - Embedded systems and appliances with custom hardware<br>`,
        hobbies: `I am a quick learner and I really enjoy learning something new on every project I work on. The more challenging the project is, the more I enjoy working on it. less`,
        skills: `- Website development, both front-end (HTML/CSS/JS) and backend (Rails/Elixir/PHP)<br>
      - Desktop application development in Java/JavaFX<br>
      - Mobile application development for Android, iPhone<br>
      - Knowledge of cryptographic schemes for authentication, signing, encryption, etc<br>
      - Development of Javacard based applets<br>
      - Linux system administration<br>`
      }
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
