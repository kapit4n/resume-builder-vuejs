<template>
  <div class="hello">
    <custom-nav />
    <b-container>
      <b-card v-for="profile in profiles" :title="profile.name"
        :img-src="profile.src" img-top tag="article" style="max-width: 30rem;" class="mb-4"
       >
        <p class="card-text">
          {{ profile.description }}
        </p>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      profiles: [
        {
          src: 'https://uploads.toptal.io/blog/hiring_guide/image/2/1_A.png',
          name: 'Full Stack Python Developer',
          description: 'I work with python in a ecommerce project by more than one year, I used jinja, javascript, jquery and boostrap with this project combined with python. I love how python simplifies the code.'
        },
        {
          src: 'https://udemy-images.udemy.com/course/480x270/607218_a05a_2.jpg',
          name: 'Full Stack JavaScript Developer',
          description: 'I work with JavaScript project by more thatn 2 years, I have some personal project where I could use javascript framework like angular, reactjs'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
