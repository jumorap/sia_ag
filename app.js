import { graphqlHTTP } from "express-graphql";
import express from "express";
import routes from "./routes.js";

import { INFO_PERSONAL } from "./sia_infoPersonal/index.js";
import { SESSION } from "./sia_session/index.js";
import { FETCH_INFO_PERSONAL } from "./sia_fetch_apiAcademica/infoPersonal/index.js";


const app = express()
const port = 4000

// Generate the GraphQL endpoint at /info_personal using the schema and the resolver
app.use(routes.infoPersonal.route, graphqlHTTP(INFO_PERSONAL))
app.use(routes.session.route, graphqlHTTP(SESSION))

// Example to fetch data from the API ACADEMICA
app.use(routes.apiAcademica.infoPersonal.route, graphqlHTTP(FETCH_INFO_PERSONAL))

/*
TODO: Write here your GraphQL endpoint as follows:
    app.use('/YOUR_ENDPOINT', graphqlHTTP(YOUR_SCHEMA_AND_RESOLVER_IMPORTED_FROM_INDEX))
*/

// Open a port to listen for requests from the client (browser), using the express app with GraphQL
// For example: http://localhost:4000/info_personal
app.listen(port, () => console.log(`Now browse to localhost:${port}/[endpoint_name]`))
