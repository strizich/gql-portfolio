import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue')
const Article = () => import(/* webpackChunkName: "article" */ './views/Article.vue')
const About = () => import(/* webpackChunkName: "about" */ './views/About.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'strizich.design | home',
        desciption: 'My personal code playground and design portfolio.'
      },
      component: Home
    },
    {
      path: '/article/:slug',
      name: 'article',
      meta: {
        title: 'strizich.design | case study',
        description: 'A thing that I have worked on.'
      },
      component: Article
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'strizich.design | about me',
        description: 'About me. Jason Strizich'
      },
      component: About
    },
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
