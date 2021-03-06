import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Resume from '@/components/Resume'
import ResumeCreate from '@/components/ResumeCreate'
import ResumeEdit from '@/components/ResumeEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Resume/:id',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/ResumeCreate',
      name: 'ResumeCreate',
      component: ResumeCreate
    },
    {
      path: '/ResumeEdit/:id',
      name: 'ResumeEdit',
      component: ResumeEdit
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
