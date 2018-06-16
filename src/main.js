import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Vuesax from 'vuesax';
import VueApollo from 'vue-apollo';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vuesax/dist/vuesax.css';
import './registerServiceWorker';

const GRAPHCMS = 'https://api.graphcms.com/simple/v1/cjhm7y7wc7frt01838z8m44aw';

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS }),
  cache: new InMemoryCache(),
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);
Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router: router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App),
}).$mount('#app');
