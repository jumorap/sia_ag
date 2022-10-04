const routes = {
  apiAcademica: {
    calificaciones: {
      url: "http://127.0.0.1:4001/calificaciones",
      route: "/fetch_calificaciones"
    },
    inscripciones: {
        url: "http://127.0.0.1:4001/inscripciones",
        route: "/fetch_inscripciones"
    },
    buscadorMaterias: {
        url: "http://127.0.0.1:4001/buscador_cursos",
        route: "/fetch_buscador_cursos"
    },
    infoAcademica: {
        url: "http://127.0.0.1:4001/info_academica",
        route: "/fetch_info_academica"
    }
  },
  infoPersonal: {
    url: "http://127.0.0.1:8000",
    route: "/info_personal"
  },
  session: {
    url: "http://127.0.0.1:3000",
    route: "/session"
  }
}

export default routes
