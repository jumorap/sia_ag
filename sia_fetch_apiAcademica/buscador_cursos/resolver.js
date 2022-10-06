import fetch from "node-fetch"
import { API_URL } from "./index.js"


/**
 * Provide a resolver function for each API endpoint (query)
 * @type {function(*, *): Promise<void>}
 * @returns {Promise<unknown>} - The response from the API
 * @param req - The request object
 * @param res - The response object
 */
export const root = (req, res) => {
    // Use http://localhost:4100/buscador_cursos to get the user data via POST to request the user data in a GraphQL query
    const query = req.body.query

    return fetch(`${API_URL}`, {
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
        .then((response) => res.json(response))
}
