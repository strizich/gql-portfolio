import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Post from './views/Post.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'strizich.design | home',
        desciption: 'My personal code playground and design portfolio.'
      }
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: Post,
      meta: {
        title: 'strizich.design | case study',
        description: 'A thing that I have worked on.'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'strizich.design | about me',
        description: 'About me. Jason Strizich'
      }
    },
    // Bad links get sent home
    {
      path: '*',
      redirect: '/'
    }
  ],
  // Scrolls to the top of the page on click. If the browser's back button is used scroll to the last saved position
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
