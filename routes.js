const routes = {
  apiAcademica: {
    calificaciones: {
      url: "http://host.docker.internal:4001/calificaciones",
      route: "/fetch_calificaciones",
    },
    inscripciones: {
      url: "http://host.docker.internal:4001/inscripciones",
      route: "/fetch_inscripciones",
    },
    buscadorMaterias: {
      url: "http://host.docker.internal:4001/buscador_cursos",
      route: "/fetch_buscador_cursos",
    },
    infoAcademica: {
      url: "http://host.docker.internal:4001/info_academica",
      route: "/fetch_info_academica",
    },
  },
  infoPersonal: {
    url: "http://host.docker.internal:8000",
    route: "/info_personal",
  },
  session: {
    url: "http://107.23.253.29:3000",
    route: "/session",
  },
  extComponent: {
    url: "http://34.125.85.16:3000/soap/2D_subjects",
    route: "/ext_component",
  },
};

export default routes;
