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
mutation{
	ingresarCurso(id_curso: "001", codigo_asignatura: 1, grupo: 1, horarios: {
    dia: 2
    hora_inicio: 12
    hora_fin: 15
    salon: "505 aulas"
    documento_profesor: "10897213"
    tipo: "op"
  }, cupos_disponibles: 20, cupos_totales: 15) {
    message
  }
}

mutation {
  inscribirEstudiante(id_curso: "001", documento_estudiante: "1") {
    message
  }
}


mutation {
  inscribirEstudiante(id_curso: "1234456", documento_estudiante: "192837746") {
    message
  }
}
*/
