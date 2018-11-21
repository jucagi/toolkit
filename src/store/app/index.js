const state = {
  contexto: {
    nombre: '',
    descripcion: '',
    palabrasClave: []
  },
  registro: {
    fecha: '',
    hora: '',
    tipo: '',
    solicitud: '',
    dependencia: '',
    respuesta: '',
    observaciones: '',
    palabrasClave: [],
    palabrasRelevantes: [],
    categorias: []
  },
  registros: [],
  relaciones: [
    {
      palabraClave: '',
      temasDeInteres: [
        {
          temaDeInteres: '',
          palabrasRelevantes: []
        }
      ]
    }
  ]
}

const getters = {
  // iconosOds: ({ iconosOds }) => iconosOds
}

export default {
  namespaced: true,
  state,
  getters
  // mutations,
  // actions
}
