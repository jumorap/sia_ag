import { buildSchema } from "graphql"


/**
 * The GraphQL schema in string form
 * @type {GraphQLSchema} schema
 */
const schema = buildSchema(`
    type Query {
        getToken(nombre_usuario: String!, contrasena: String!): Token
        refreshToken(auth_token: String!): Token
        user(nombre_usuario: String!):User
    }
    type Error{
        error: String
    }
    type User {
        nombre_usuario: String
        contrasena: String
        rol: [Rol]
    }
    type Token {
        nombre_usuario: String
        auth_token: String
        rol: [Rol]
    }
    type Rol{
        tipo_rol: String
    }
    input RolInput {
        tipo_rol: String
    }
    type Mutation {
        updateUser(nombre_usuario: String!, rol:[RolInput] ): User
        createUser(nombre_usuario: String!, contrasena: String!, rol:[RolInput]!): User
    }
`)


export default schema
