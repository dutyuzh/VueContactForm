import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'contact',
      component: Contact
    },
    { path: '*',
      redirect: '/'
    } // catch all use case
  ]
})
