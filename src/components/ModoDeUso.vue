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

          <v-layout row>
            <v-flex xs6>
              <v-card color="info">
                <v-card-title primary-title>
                  <v-layout column centered>
                    <div class="headline">No tienes información y tienes poco tiempo</div>
                    <v-btn large color="primary">
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

            <v-flex xs6>
              <v-card color="success">
                <v-card-title primary-title>
                  <v-layout column centered>
                    <div class="headline">¿Quieres ingresar y seguir probando?</div>
                    <v-btn large color="primary">
                      <v-icon>playlist_add_check</v-icon>
                      <span> Dly</span>
                    </v-btn>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-layout column centered>
                    <h3>Crea tu propia hisoria</h3>
                    <p>Do it your self con docs propios, no del caso de uso.</p>
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

export default {
  data () {
    return {
      logoToolkit
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
