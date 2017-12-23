<template>
  <div class="home">
    <custom-nav />
    <b-container>
      <b-card v-for="profile in profiles" :title="profile.name"
        :img-src="profile.src" img-top tag="article" style="max-width: 300px; display: inline-grid; margin: 10px;" class="mb-4"
       >
       <router-link :to="{ name: 'Resume', params: { id: profile.id }}" tag="button">GO</router-link>
        <p class="card-text" style="height: 200px;">
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
          id: 1,
          src: 'https://customjavadevelopment.files.wordpress.com/2015/11/which-is-better-java-or-scala.jpg',
          name: 'Full Stack Scala Developer',
          description: 'I work with python in a ecommerce project by more than one year, I used jinja, javascript, jquery and boostrap with this project combined with python. I love how python simplifies the code.'
        },
        {
          id: 2,
          src: 'https://s3-ap-southeast-1.amazonaws.com/work.smartcasual.co/opportunities/header_imgs/33/medium.png',
          name: 'Full Stack Java Developer',
          description: 'I work with JavaScript project by more thatn 2 years, I have some personal project where I could use javascript framework like angular, reactjs'
        },
        {
          id: 3,
          src: 'https://uploads.toptal.io/blog/hiring_guide/image/2/1_A.png',
          name: 'Full Stack Python Developer',
          description: 'I work with python in a ecommerce project by more than one year, I used jinja, javascript, jquery and boostrap with this project combined with python. I love how python simplifies the code.'
        },
        {
          id: 4,
          src: 'https://udemy-images.udemy.com/course/480x270/607218_a05a_2.jpg',
          name: 'Full Stack JavaScript Developer',
          description: 'I work with JavaScript project by more thatn 2 years, I have some personal project where I could use javascript framework like angular, reactjs'
        },
        {
          id: 5,
          src: 'https://bs-uploads.toptal.io/blackfish-uploads/job_description_page/seo/og_image_file/og_image/1804/angular_job-01-eca8007a71c629ae2e8666a022150fa6.jpg',
          name: 'Angular js Developer',
          description: 'I work with Angular project by more thatn 2 years, I have some personal project where I could use javascript framework like angular, reactjs'
        },
        {
          id: 6,
          src: 'https://qph.ec.quoracdn.net/main-qimg-ba62e642e112dc7ec2d1043faeb1a560',
          name: 'React js Developer',
          description: 'I worked in personal projects'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home  article img {
  background-color: red;
  height: 150px;
  width: 300px;
  overflow: hidden;
  background: lightblue; 
}
</style>
