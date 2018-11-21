<template>
  <v-app dark>
    <v-card color="black">
      <v-layout row align-center > 
        <v-flex xs5>
          <router-link to="/">
            <v-img width="250px" :src="logoToolkitMediano" alt="Logo de Toolkit IA"></v-img>
          </router-link>
        </v-flex>
        <v-flex xs-5>
          <v-spacer></v-spacer>
          <v-btn flat small>Ingreso</v-btn>
          <v-btn flat small>Registro</v-btn>
          <v-btn flat small>Perfil</v-btn>
        </v-flex>
      </v-layout>
    </v-card>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app color="black">
      <v-flex xs12 text-align="center">
        <v-card-title>PNUD, MINTIC UNICORDOBA y CICC &copy; 2018</v-card-title>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import logoToolkit from '@/assets/logoToolkit.svg'
import logoToolkitMediano from '@/assets/LogoToolkitMediano.png'

export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      logo: logoToolkit,
      logoToolkitMediano,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Toolkit IA'
    }
  },
  name: 'App'
}
</script>
