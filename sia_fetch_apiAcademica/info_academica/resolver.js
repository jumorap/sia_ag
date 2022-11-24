import fetch from "node-fetch"
import { API_URL } from "./index.js"
import { queryGetUsersInfo } from "./queries.js"


/**
 * Provide a resolver function for each API endpoint (query)
 * @param query - The query to be executed in the API
 * @returns {Promise<json>} - The response from the API
 */
const refFetch = async (query) => {
    return fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
        body: JSON.stringify({
            query
        })
    })
        .then(response => response.json())
}


/**
 * Provide a resolver function for each API endpoint (query)
 * @type {{user: (function(*): Promise<json>)}}
 * @param {Object} args - The arguments passed in the query
 * @returns {Promise<json>} - The response from the API
 */
export const root = {
    user: (user) => {
        // Use http://localhost:4001/info_academica to get the user data via POST to request the user data in a GraphQL query
        const query = queryGetUsersInfo(user)

        return refFetch(query).then((response) => response.data)
    },
}
