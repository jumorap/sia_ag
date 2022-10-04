import fetch from "node-fetch"
import { API_URL } from "./index.js"
import { queryListGrades, queryListAsignatures, queryListHistory, queryCreateGrades, queryUpdateGrades, queryDeleteGrades, queryUpdateAsignatures, queryUpdateHistory } from "./queries.js"


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
 * @type {{listGrades: (function(*): Promise<*>), listAsignatures: (function(*): Promise<*>), listHistory: (function(*): Promise<*>), createGrades: (function(*): Promise<*>), updateGrades: (function(*): Promise<*>), deleteGrades: (function(*): Promise<*>), updateAsignatures: (function(*): Promise<*>), updateHistory: (function(*): Promise<*>)}}
 * @param {Object} args - The arguments passed in the query
 * @returns {Promise<json>} - The response from the API
 */
export const root = {
    listGrades: (args) => {
        // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryListGrades(args)

        return refFetch(query).then((response) => {
            return response.data.listGrades
        })
    },

    listAsignatures: (args) => {
        // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryListAsignatures(args)

        return refFetch(query).then((response) => {
            return response.data.listAsignatures
        })
    },

    listHistory: (args) => {
        // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryListHistory(args)

        return refFetch(query).then((response) => {
            return response.data.listHistory
        })
    },

    createGrades: (args) => {
        // use http://localhost:4001/calificaciones via POST to create grades
        const query = queryCreateGrades(args)

        return refFetch(query).then((response) => {
            return response.data.createGrades
        })
    },

    updateGrades: (args) => {
        // use http://localhost:4001/calificaciones via POST to update grades
        const query = queryUpdateGrades(args)

        return refFetch(query).then((response) => {
            return response.data.updateGrades
        })
    },

    deleteGrades: (args) => {
        // use http://localhost:4001/calificaciones via POST to delete grades
        const query = queryDeleteGrades(args)

        return refFetch(query).then((response) => {
            return response.data.deleteGrades
        })
    },

    updateAsignatures: (args) => {
        // use http://localhost:4001/calificaciones via POST to update asignatures
        const query = queryUpdateAsignatures(args)

        return refFetch(query).then((response) => {
            return response.data.updateAsignatures
        })
    },

    updateHistory: (args) => {
        // use http://localhost:4001/calificaciones via POST to update history
        const query = queryUpdateHistory(args)

        return refFetch(query).then((response) => {
            return response.data.updateHistory
        })
    },
}
