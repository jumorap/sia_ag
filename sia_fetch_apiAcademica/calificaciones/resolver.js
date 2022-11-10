import fetch from "node-fetch"
import { API_URL } from "./index.js"
import { queryCreateGrades, queryDeleteGrades, queryFormatStudents, queryGetCourseName, queryGetDocAsignatures, queryListAll, queryListCourse, queryListGrades, queryListHistory, queryUpdateCourse, queryUpdateGrades, queryUpdateHistory } from "./queries.js"

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
    listAll: () => {
        // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryListAll()

        return refFetch(query).then((response) => {
            return response.data.listAll
        })
    },

    listGrades: (args) => {
        // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryListGrades(args)

        return refFetch(query).then((response) => {
            return response.data.listGrades
        })
    },

    listCourse: (args) => {
        // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryListCourse(args)

        return refFetch(query).then((response) => {
            return response.data.listCourse
        })
    },

    listHistory: (args) => {
         // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
         const query = queryListHistory(args)

         return refFetch(query).then((response) => {
            return response.data.listHistory
         })
    },

    getCourseName: (args) => {
         // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
         const query = queryGetCourseName(args)

         return refFetch(query).then((response) => {
            return response.data.getCourseName
         })
    },

    formatStudents: (args) => {
        // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryFormatStudents(args)

        return refFetch(query).then((response) => {
            return response.data.formatStudents
        })
    },

    createGrades: (args) => {
        // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryCreateGrades(args)

        return refFetch(query).then((response) => {
            return response.data.createGrades
        })
    },

    updateGrades: (args) => {
        // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryUpdateGrades(args)

        return refFetch(query).then((response) => {
            return response.data.updateGrades
        })
    },

    deleteGrades: (args) => {
        // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryDeleteGrades(args)

        return refFetch(query).then((response) => {
            return response.data.deleteGrades
        })
    },

    updateCourse: (args) => {
         // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
         const query = queryUpdateCourse(args)

         return refFetch(query).then((response) => {
            return response.data.updateCourse
         })
    },

    updateHistory: (args) => {
         // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryUpdateHistory(args)

        return refFetch(query).then((response) => {
            return response.data.updateHistory
        })
    },

    getDocAsignatures: (args) => {
        const query = queryGetDocAsignatures(args.documento_identidad)
        return refFetch(query).then((response) => {
            return response.data.getDocAsignatures
        })

    },
}