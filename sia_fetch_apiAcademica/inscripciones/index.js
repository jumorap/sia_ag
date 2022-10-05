import schema from "./schema.js"
import { root } from "./resolver.js"
import routes from "../../routes.js"


// Expose the API URL
export const API_URL = routes.apiAcademica.inscripciones.url

// Expose the schema and the resolver
export const FETCH_INSCRIPCIONES = {
    schema: schema,
    rootValue: root,
    graphiql: true,
}

/*
mutation {
  inscribirEstudiante(id_curso: "1234456", documento_estudiante: "192837746") {
    message
  }
}




*/
