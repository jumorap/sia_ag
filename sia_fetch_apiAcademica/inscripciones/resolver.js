import fetch from "node-fetch";
import { API_URL } from "./index.js";
import {
  queryInscribirEstudiante,
  queryIngresaCurso,
  queryIngresarProfesor,
  queryInscripcionByCurso,
  queryObtenerProfesor,
  queryCursosByCodigoAsignatura,
  queryHorarioByDocumentoEstudiante,
  queryCursoByProfesor,
} from "./queries.js";

/**
 * Provide a resolver function for each API endpoint (query)
 * @param query - The query to be executed in the API
 * @returns {Promise<json>} - The response from the API
 */
const refFetch = async (query) => {
  return fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  }).then((response) => response.json());
};

/**
 * Provide a resolver function for each API endpoint (query)
 * @type {{ingresarCurso: (function(*): Promise<json>)}}
 * @param {Object} args - The arguments passed in the query
 * @returns {Promise<unknown>} - The response from the API
 */
export const root = {
  ingresarCurso: (args) => {
    // Use http://127.0.0.1:4001/inscripciones to subscribe a course via POST to request the course data in a GraphQL query
    const query = queryIngresaCurso(args);

    return refFetch(query).then((response) => {
      return response.data.ingresarCurso;
    });
  },

  inscribirEstudiante: (args) => {
    // Use http://127.0.0.1:4001/inscripciones to subscribe a student via POST to request the student data in a GraphQL query
    const query = queryInscribirEstudiante(args);

    return refFetch(query).then((response) => {
      return response.data.inscribirEstudiante;
    });
  },

  ingresarProfesor: (args) => {
    // Use http://127.0.0.1:4001/inscripciones to subscribe a teacher via POST to request the teacher data in a GraphQL query
    const query = queryIngresarProfesor(args);

    return refFetch(query).then((response) => {
      return response.data.ingresarProfesor;
    });
  },
  cursosByCodigoAsignatura: async (args) => {
    // Use http://127.0.0.1:4001/cursos to get the courses via POST to request the course data in a GraphQL query
    const query = queryCursosByCodigoAsignatura(args);

    const response = await refFetch(query);
    return response.data.cursosByCodigoAsignatura;
  },
  inscripcionByIdCurso: async (args) => {
    const query = queryInscripcionByCurso(args);

    const response = await refFetch(query);
    return response.data.inscripcionByIdCurso;
  },
  obtenerProfesor: async (args) => {
    // Use http://
    const query = queryObtenerProfesor(args);

    const response = await refFetch(query);
    return response.data.obtenerProfesor;
  },
  horarioByDocumentoEstudiante: async (args) => {
    // Use http://
    const query = queryHorarioByDocumentoEstudiante(args);

    const response = await refFetch(query);
    return response.data.horarioByDocumentoEstudiante;
  },

  cursoByProfesor: async (args) => {
    // Use http://
    const query = queryCursoByProfesor(args);

    const response = await refFetch(query);
    return response.data.cursoByProfesor;
  },
};
