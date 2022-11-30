const routes = {
  apiAcademica: {
    calificaciones: {
      url: "http://sia-academica-ag/calificaciones",
      route: "/fetch_calificaciones",
    },
    inscripciones: {
      url: "http://sia-academica-ag/inscripciones",
      route: "/fetch_inscripciones",
    },
    buscadorMaterias: {
      url: "http://sia-academica-ag/buscador_cursos",
      route: "/fetch_buscador_cursos",
    },
    infoAcademica: {
      url: "http://sia-academica-ag/info_academica",
      route: "/fetch_info_academica",
    },
  },
  infoPersonal: {
    url: "http://sia-info-personal-ms:8000",
    route: "/info_personal",
  },
  session: {
    url: "http://sia-session-ms:3000",
    route: "/session",
  },
  extComponent: {
    url: "http://34.125.85.16:3000/soap/2D_subjects",
    route: "/ext_component",
  },
};

export default routes;
