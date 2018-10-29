import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue')
const Post = () => import(/* webpackChunkName: "post" */ './views/Post.vue')
const About = () => import(/* webpackChunkName: "about" */ './views/About.vue')
const BlogPost = () => import(/* webpackChunkName: "BlogPost" */ './views/BlogPost.vue')
// const AllPosts = () => import(/* webpackChunkName: "allposts" */ './views/AllPosts.vue')
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
      path: '/post/:slug',
      name: 'post',
      meta: {
        title: 'strizich.design | case study',
        description: 'A thing that I have worked on.'
      },
      component: Post
    },
    {
      path: '/blog/:slug',
      name: 'blog',
      meta: {
        title: 'strizich.design | blog post',
        description: 'Latest changes'
      },
      component: BlogPost
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
    // {
    //   path: '/projects',
    //   name: 'All Posts',
    //   meta: {
    //     title: 'strizich.design | about me',
    //     description: 'About me. Jason Strizich'
    //   },
    //   component: AllPosts
    // },
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
