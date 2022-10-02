// THIS IS AN EXAMPLE FILE ONLY

import fetch from "node-fetch"
import { API_URL } from "./index.js"
import { queryGetUsersInfo, queryUpdateUser } from "./queries.js"


/**
 * Provide a resolver function for each API endpoint (query)
 * @type {{updateUser: (function(*): Promise<unknown>), getUserInfo: (function(*): Promise<unknown>)}}
 * @param {Object} args - The arguments passed in the query
 * @returns {Promise<unknown>} - The response from the API
 */
export const root = {
    getUserInfo: (user) => {
        // Use http://localhost:4000/info_personal to get the user data via POST to request the user data in a GraphQL query
        const query = queryGetUsersInfo(user)

        return fetch(`${API_URL}/info_personal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                query,
            }),
        })
            .then((response) => response.json())
            .then((response) => response.data.user)
    },

    updateUser: (args) => {
        // use http://localhost:4000/info_personal via POST to update the user data
        const query = queryUpdateUser(args)

        return fetch(`${API_URL}/info_personal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                query,
            }),
        })
            .then((response) => response.json())
            .then((response) => response.data.updateUser)
        }
}
