import fetch from "node-fetch"
import { API_URL } from "./index.js"


/**
 * Provide a resolver function for each API endpoint (query)
 * @type {{updateUser: (function(*): Promise<unknown>), user: (function(): Promise<DataTransferItem>)}}
 * @param {Object} args - The arguments passed in the query
 * @returns {Promise<unknown>} - The response from the API
 */
const root = {
    user: () => {
        // Use http://127.0.0.1:8000/user/<username> to get the user data via GET
        // TODO: Make the username dynamic
        return fetch(`${API_URL}/user/test`)
            .then(response => response.json())
            .then(data => {
                    return data.items[0]
                }
            )
    },
    updateUser: (args) => {
        // use http://127.0.0.1:8000/update via PUT
        return fetch(`${API_URL}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(args)
        })
            .then(response => response.json())
            .then(data => {
                return data
            })
    }
}

export default root;
