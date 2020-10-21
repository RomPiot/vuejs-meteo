import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import CurrentWeather from './components/CurrentWeather.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/current-weather/',
      component: CurrentWeather
    },
    {
      path: '/current-weather/:city',
      component: CurrentWeather
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
