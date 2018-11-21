<template>
  <v-container fluid>
  
    <div
      id="e3"
      style="max-width: 600px; margin: auto;"
      class="grey lighten-3"
    >
      <v-toolbar
        color="primary"
        dark
      >
        <v-toolbar-title>Modo de Uso</v-toolbar-title>
      </v-toolbar>

      <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row>
            <v-flex xs12 class="centrado">
              <v-avatar
                :size="55"
              >
                <v-img :src="logoToolkit" alt="Logo de Toolkit IA"></v-img>
              </v-avatar>
              <h1>Toolkit AI</h1>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex>
              <v-card :color="colors.grey.lighten3">
                <v-card-title primary-title>
                  <v-layout column centered>
                    <div class="headline">No tienes información y tienes poco tiempo</div>
                    <v-btn large color="primary" outline>
                      <v-icon>play_circle_outline</v-icon>
                      <span> Demo</span>
                    </v-btn>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-layout column centered>
                    <h3>Conoce la hisoria de otros</h3>
                    <p>Visita guiada del Toolkit con la info del caso de uso</p>
                  </v-layout>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex>
              <v-card :color="colors.grey.lighten3">
                <v-card-title primary-title>
                  <v-layout column centered>
                    <div class="headline">¿Quieres ingresar y seguir probando?</div>
                    <v-btn large color="primary" outline>
                      <v-icon>playlist_add_check</v-icon>
                      <span> DIY</span>
                    </v-btn>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-layout column centered>
                    <h3>Crea tu propia hisoria</h3>
                    <p>Do It Your self (DIY) con documentos propios, no del caso de uso.</p>
                  </v-layout>
                </v-card-title>
              </v-card>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </div>    
  </v-container>
</template>

<script>
import logoToolkit from '@/assets/logoToolkit.svg'
import colors from 'vuetify/es5/util/colors'

export default {
  data () {
    return {
      logoToolkit,
      colors
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centrado {
  text-align: center;
}
</style>
