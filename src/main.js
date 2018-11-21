// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

const tema = {
  theme: {
    primary: colors.purple.base,
    secondary: colors.cyan.base,
    accent: colors.deepPurple.base,
    error: colors.pink.base,
    warning: colors.orange.base,
    info: colors.blue.base,
    success: colors.teal.base
  }
  // theme: {
  //   primary: '#7E57C2',
  //   secondary: '#8BC34A',
  //   accent: '#FFA726',
  //   error: '#C51162',
  //   info: '#009999',
  //   success: '#FFA726',
  //   warning: '#FF6600'
  // }
}

Vue.use(Vuetify, tema)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
