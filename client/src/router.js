import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddBlog from './views/AddBlog.vue'
import SingleBlog from './views/SingleBlog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addblog',
      name: 'addblog',
      component: AddBlog
    },
    {
      path: '/singleblog/:id',
      name: 'singleblog',
      component: SingleBlog
    }
  ]
})
