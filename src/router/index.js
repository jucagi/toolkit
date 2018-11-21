import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import QuienesSomos from '@/components/QuienesSomos'
import ModoDeUso from '@/components/ModoDeUso'
import LineaDeTiempo from '@/components/LineaDeTiempo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/quienesSomos',
      name: 'QuienesSomos',
      component: QuienesSomos
    },
    {
      path: '/modoDeUso',
      name: 'ModoDeUso',
      component: ModoDeUso
    },
    {
      path: '/lineaDeTiempo',
      name: 'LineaDeTiempo',
      component: LineaDeTiempo
    }
  ]
})
