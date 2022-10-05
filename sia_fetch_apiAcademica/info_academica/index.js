import schema from "./schema.js"
import { root } from "./resolver.js"
import routes from "../../routes.js"


// Expose the API URL
export const API_URL = routes.apiAcademica.infoAcademica.url

// Expose the schema and the resolver
export const FETCH_INFO_ACADEMICA = {
    schema: schema,
    rootValue: root,
    graphiql: true,
}

/*
{
  user(username: "pacuna") {
    _pa
    _papa
    _pappi
    _documento_identidad
    _asignaturas {
      _tipo
      _codigo
    }
  }
}
 */
