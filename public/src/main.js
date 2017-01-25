import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './Home.vue';
import Jumbo from './components/jumbotron.vue';
import Nav from './components/navigation.vue';
import Team from './components/teams.vue';

// Register components (to use as <component>)
Vue.component('jumbo', Jumbo);
Vue.component('navbar', Nav);

// Routing
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Jumbo },
  { path: '/teams', component: Team}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

// Root Instances
var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
