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
{
	getToken(nombre_usuario: "abcd", contrasena: "abcd") {
    nombre_usuario
    auth_token
    rol {
      tipo_rol
    }
  }
}



mutation {
  createUser(nombre_usuario:"abcd", contrasena:"abcd", rol: [{
    tipo_rol: "estudiante"
  }]) {
    nombre_usuario
    contrasena
    rol {
      tipo_rol
    }
  }
}

 */
