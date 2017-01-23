import Vue from './libs/Vue/vue.dev.js';                     // vue.min.js for PROD
import App from './App.vue';
import Jumbo from './components/jumbotron.vue';

// Register components
Vue.component('jumbo', Jumbo);

// Root Instances
new Vue({
  el: '#app',
  render: h => h(App)
});

// Test that pack works
const message = 'Webpack working...';
console.log(message);
