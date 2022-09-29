import { graphqlHTTP } from "express-graphql";
import express from "express";

import { INFO_PERSONAL } from "./sia_infoPersonal/index.js";
import { INFO_ACADEMICA } from "./sia_infoAcademica/index.js";
import { SESSION } from "./sia_session/index.js";


const app = express()

// Generate the GraphQL endpoint at /info_personal using the schema and the resolver
app.use('/info_personal', graphqlHTTP(INFO_PERSONAL));
app.use('/session', graphqlHTTP(SESSION));
app.use('/info_academica', graphqlHTTP(INFO_ACADEMICA));

/*
TODO: Write here your GraphQL endpoint as follows:
    app.use('/YOUR_ENDPOINT', graphqlHTTP(YOUR_SCHEMA_AND_RESOLVER_IMPORTED_FROM_INDEX))
*/

// Open a port to listen for requests from the client (browser), using the express app with GraphQL
// For example: http://localhost:4000/info_personal
app.listen(4000, () => console.log(`Now browse to localhost:4000/[endpoint_name]`))
