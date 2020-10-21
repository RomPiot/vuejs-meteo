import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import CurrentWeather from './components/CurrentWeather.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/current-weather/:cityParameter',
      component: CurrentWeather
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
