<template>
  <v-container fluid>
    <v-layout row>
      <v-img :src="fondo"></v-img>
    </v-layout>
    <v-layout row>
      <v-flex xs12 class="centrado">
        <v-avatar
          :size="35"
        >
          <v-img :src="logoToolkit" alt="Logo de Toolkit IA"></v-img>
        </v-avatar>
        <v-btn>
          Iniciar
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex lg6 class="centrado">
        <p>
          <span>Contáctenos:</span><br />
          <a href="mailto:centrodeinnovacion@mintic.gov.co">centrodeinnovacion@mintic.gov.co</a><br />
          <a href="mailto:carina@correo.unicordoba.edu.co">carina@correo.unicordoba.edu.co</a>
        </p>
      </v-flex>
      <v-flex lg6 class="centrado">
        <p>
          <span>Sobre ToolKits:</span><br />
          <a to="quienes">¿Quiénes somos?</a><br />
          <a href="http://centrodeinnovacion.gov.co">centrodeinnovacion.gov.co</a><br />
          <a href="http://cien.net.co">cien.net.co</a>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import logoToolkit from '@/assets/logoToolkit.svg'
import fondo from '@/assets/Fondo2.png'

export default {
  data () {
    return {
      logoToolkit,
      fondo
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.centrado {
  text-align: center;
}
</style>
