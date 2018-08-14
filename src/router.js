import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import CaseStudy from './views/CaseStudy.vue'
import Sidebar from './components/Sidebar.vue'
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
      path: '/case/:slug',
      name: 'case',
      component: CaseStudy
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: Sidebar
    }
  ]
})
