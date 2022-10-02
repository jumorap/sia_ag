import schema from "./schema.js"
import { root } from "./resolver.js"
import routes from "../routes.js"


// Expose the API URL
export const API_URL = routes.session.url

// Expose the schema and the resolver
export const SESSION = {
    schema: schema,
    rootValue: root,
    graphiql: true,
}


/*
NOTES:
1. To update the user data, use the following query:
mutation {
  updateUser(
    nombre_usuario: "test",
    lugar_expedicion: "NEW PLACE",
    email_personal: "NEW EMAIL",
    telefono_movil: "NEW PHONE",
    eps: "NEW EPS SANITAS",
    situacion_militar: "N",
    vivienda: [
    {
      vivienda_tipo: ""
      vivienda_direccion: ""
      vivienda_departamento: ""
      vivienda_codigo_postal: ""
      vivienda_telefono: ""
      vivienda_estrato: ""
    },
    {
      vivienda_tipo: "a"
      vivienda_direccion: ""
      vivienda_departamento: ""
      vivienda_codigo_postal: ""
      vivienda_telefono: ""
      vivienda_estrato: "5"
    },
  ]
  ) {
    nombre_usuario
    eps
  }
}

2. To get the user data, use the following query:
{
  user(username: "test") {
    nombre_usuario
    eps
    email_personal
    vivienda {
      vivienda_tipo
      vivienda_estrato
      vivienda_telefono
    }
  }
}
 */
