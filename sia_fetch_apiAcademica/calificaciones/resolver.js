import fetch from "node-fetch"
import { API_URL } from "./index.js"
import { queryListGrades, queryListHistory, queryCreateGrades, queryUpdateGrades, queryDeleteGrades, queryUpdateHistory, queryListCourse, queryUpdateCourse, queryListAll, queryGetCourse, queryFormatStudents } from "./queries.js"


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
    listAll: (args) => {
        // Use http://localhost:4001/calificaciones to get the user data via POST to request the data in a GraphQL query
        const query = queryListAll(args)

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

    updateCourse: (args) => {
        // use http://localhost:4001/calificaciones via POST to update courses
        const query = queryUpdateCourse(args)

        return refFetch(query).then((response) => {
            return response.data.updateCourse
        })
    },

    updateHistory: (args) => {
        // use http://localhost:4001/calificaciones via POST to update history
        const query = queryUpdateHistory(args)

        return refFetch(query).then((response) => {
            return response.data.updateHistory
        })
    },

    getCourseName: (args) => {
        // use http://localhost:4001/calificaciones via POST to update history
        const query = queryGetCourse(args)

        return refFetch(query).then((response) => {
            return response.data.getCourseName
        })
    },

    formatStudents: (args) => {
        // use http://localhost:4001/calificaciones via POST to get a format to view in front
        const query = queryFormatStudents(args)
        
        return refFetch(query).then((response) => {
            return response.data.formatStudents
        })
    }
}
