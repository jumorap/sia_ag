import express from 'express'
import { graphqlHTTP } from 'express-graphql'

import schema from "./schema.js"
import root from "./resolver.js"


// Expose the API URL
export const API_URL = "http://127.0.0.1:8000"
const app = express()

// Generate the GraphQL endpoint at /graphql using the schema and the resolver
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

// Open a port to listen for requests from the client (browser), using the express app with GraphQL
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))


/*
NOTES:
- The GraphQL schema is defined in schema.js
- The resolver is defined in resolver.js
- The API URL is defined in index.js
 */

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
  user {
    nombre_usuario
    vivienda{
      vivienda_tipo
      vivienda_estrato
    }
  }
}
 */