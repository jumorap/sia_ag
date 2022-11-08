import fetch from "node-fetch"
import { API_URL } from "./index.js"

/**
 * Provide a resolver function for each API endpoint (query)
 * @type {{updateUser: (function(*): Promise<unknown>), user: (function(*): Promise<DataTransferItem>)}}
 * @param {Object} args - The arguments passed in the query
 * @returns {Promise<unknown>} - The response from the API
 */
export const root = {
    listExtAsignatures: () => {
        
        return fetch(`${API_URL}`)
            .then(response => response.json())
            .then(data => {
                    return data[0]
                }
            )
    }
}
