import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePrism from 'vue-prism'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/global.scss'
import './registerServiceWorker'
import 'prismjs/themes/prism.css'

const httpLink = new HttpLink({
  uri: 'https://api-useast.graphcms.com/v1/cjk4io64p001h01gmk8nchuzs/master'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})
// Sets the title of the page to the value defined in the router.js meta field
router.beforeEach((to, from, next) => {
  console.log(to)
  document.title = to.meta.title
  document.description = to.meta.description
  next()
})

Vue.filter('truncate', function (text, stop, clamp) {
  return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
})

Vue.use(VuePrism)
Vue.use(VueApollo)
// Vue.use(BootstrapVue)
Vue.use(require('vue-moment'))
Vue.use(Vue2Filters)

Vue.config.productionTip = false
Vue.config.performance = true

new Vue({
  apolloProvider,
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
