import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import App from './App.vue'
import router from './router'
import store from './store'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/global.scss'
import './registerServiceWorker'

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

Vue.use(VueApollo)
Vue.use(BootstrapVue)
Vue.use(require('vue-moment'))
Vue.use(Vue2Filters)
Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
