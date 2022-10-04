import { graphqlHTTP } from "express-graphql";
import express from "express";
import routes from "./routes.js";

import { INFO_PERSONAL } from "./sia_infoPersonal/index.js";
import { SESSION } from "./sia_session/index.js";
import { FETCH_CALIFICACIONES } from "./sia_fetch_apiAcademica/calificaciones/index.js";
import { FETCH_INSCRIPCIONES } from "./sia_fetch_apiAcademica/inscripciones/index.js";
import { FETCH_BUSCADOR_CURSOS } from "./sia_fetch_apiAcademica/buscador_cursos/index.js";
import { FETCH_INFO_ACADEMICA } from "./sia_fetch_apiAcademica/info_academica/index.js";


const app = express()
const port = 4000

// Generate the GraphQL endpoint at /info_personal using the schema and the resolver
app.use(routes.infoPersonal.route, graphqlHTTP(INFO_PERSONAL))
app.use(routes.session.route, graphqlHTTP(SESSION))

// Example to fetch data from the API ACADEMICA
app.use(routes.apiAcademica.calificaciones.route, graphqlHTTP(FETCH_CALIFICACIONES))
app.use(routes.apiAcademica.inscripciones.route, graphqlHTTP(FETCH_INSCRIPCIONES))
app.use(routes.apiAcademica.buscadorMaterias.route, graphqlHTTP(FETCH_BUSCADOR_CURSOS))
app.use(routes.apiAcademica.infoAcademica.route, graphqlHTTP(FETCH_INFO_ACADEMICA))


// Open a port to listen for requests from the client (browser), using the express app with GraphQL
// For example: http://localhost:4000/info_personal
app.listen(port, () => console.log(`Now browse to localhost:${port}/[endpoint_name]`))
