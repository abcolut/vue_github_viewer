import Vue from 'vue'
import App from './App.vue'

import {store} from './store/store.js';
import {router} from './routes.js';


//import Vuex from 'vuex';
//Vue.use(Vuex);


Vue.config.productionTip = false

new Vue({store,router,
  render: h => h(App),
}).$mount('#app')
