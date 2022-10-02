const routes = {
  apiAcademica: {
    infoPersonal: {
      url: "http://127.0.0.1:4000/info_personal",
      route: "/fetch_info_personal"
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
