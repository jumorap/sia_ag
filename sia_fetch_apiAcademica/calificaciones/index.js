import schema from "./schema.js"
import { root } from "./resolver.js"
import routes from "../../routes.js"


// Expose the API URL
export const API_URL = routes.apiAcademica.calificaciones.url

// Expose the schema and the resolver
export const FETCH_CALIFICACIONES = {
    schema: schema,
    rootValue: root,
    graphiql: true,
}

/*
{
  listGrades(id: null, asignature: 1234456) {
    id
    id_asignature
    name
    percentage
    id_students
    values
  }
}




mutation {
  createGrades(id: 1, id_asignature: 1234456, name: "lenguajes", percentage: 74.5, id_students: "pacuna", values: 2.5) {
    id
    id_asignature
    name
    percentage
    id_students
    values
  }
}

 */
