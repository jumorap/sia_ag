import { buildSchema } from "graphql"

/**
 * The GraphQL schema in string form
 * @type {GraphQLSchema} schema
 */

const schema = buildSchema(`
    type Query {
        listExtAsignatures: [Asignature]
    }

    type Asignature {
        Code_Subject: String!
        Name_Subject: String!
        Typology: String!
        Credits: String!
    }
    `
)

export default schema