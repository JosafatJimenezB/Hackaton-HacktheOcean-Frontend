<template>
  <NavBar />
  <landing />
  <peligro />
  <formulario />
  <mapa />
  <letter />
  <footerSec />
</template>

<script>
// @ is an alias to /src

import landing from '../components/LandingPage.vue'
import peligro from '../components/peligroExtincion.vue'
import formulario from '../components/formularioSeccion.vue'
import mapa from '../components/mapaEspecies.vue'
import letter from '../components/contactoSeccion.vue'
import footerSec from '../components/footerSeccion.vue'

export default {
  name: 'HomeView',
  components: {
    landing,
    peligro,
    formulario,
    mapa,
    letter,
    footerSec,
  }
}
</script>
