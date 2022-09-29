import fetch from "node-fetch"
import { API_URL } from "./index.js"


/**
 * Provide a resolver function for each API endpoint (query)
 * @type {{updateUser: (function(*): Promise<unknown>), user: (function(*): Promise<DataTransferItem>)}}
 * @param {Object} args - The arguments passed in the query
 * @returns {Promise<unknown>} - The response from the API
 */

async function authFech(args, rute, method) {
    const datafetched = await fetch(`${API_URL}/${rute}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: method != "GET" ? JSON.stringify(args) : null
    });
    const data = await datafetched.json();
    const rols = []; data?.rol?.forEach(value => rols.push({ tipo_rol: value }));
    var res = {
        auth_token: data?.auth_token || data?.status,
        rol: rols,
        nombre_usuario: data?.nombre_usuario,
        contrasena: data?.contrasena
    };
    return res;
}

export const root = {
    user: async (args) => {
        const res = await authFech(args, "users/" + args.nombre_usuario, "GET");
        return res;
    },
    getToken: async (args) => {
        // Use http://127.0.0.1:8000/user/<username> to get the user data via GET to request the user data
        const res = await authFech(args, "auth", "POST");
        return res;
    },
    refreshToken: async (args) => {
        const res = await authFech(args, "auth/refresh", "POST");
        return res;
    }
}

export default root;