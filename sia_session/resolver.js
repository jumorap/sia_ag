import fetch from "node-fetch"
import { API_URL } from "./index.js"


/**
 * Provide a resolver function for each API endpoint (query)
 * @type {{updateUser: (function(*): Promise<unknown>), user: (function(*): Promise<DataTransferItem>)}}
 * @param {Object} args - The arguments passed in the query
 * @returns {Promise<unknown>} - The response from the API
 */

function rolNotCorrect(rols) {
    if (rols.length < 1 || rols.length > 2 || !rols.every(val => ["estudiante", "profesor"].includes(val)))
        return true
    else
        return false;
}

async function authFech(args, rute, method, body = null) {
    const datafetched = await fetch(`${API_URL}/${rute}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });
    const data = await datafetched.json();
    const rols = []; data?.rol?.forEach(value => rols.push({ tipo_rol: value }));

    if (data?.status || data?.error) {
        return new Error(data?.status || data?.error);
    }

    var res = {
        auth_token: data?.auth_token,
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
        const res = await authFech(args, "auth", "POST", JSON.stringify(args));
        return res;
    },
    refreshToken: async (args) => {
        const res = await authFech(args, "auth/refresh", "POST", JSON.stringify(args));
        return res;
    },
    updateUser: async (args) => {
        var rols = []; args?.rol?.forEach(value => rols.push(value.tipo_rol));
        if (rolNotCorrect(rols)) return {};
        const res = await authFech(args, "users/" + args.nombre_usuario, "PUT", JSON.stringify({ rol: rols }));
        return res;
    },
    createUser: async (args) => {
        var rols = []; args?.rol?.forEach(value => rols.push(value.tipo_rol));
        if (rolNotCorrect(rols)) return {};
        const body = { nombre_usuario: args.nombre_usuario, contrasena: args.contrasena, rol: rols };
        const res = await authFech(args, "users", "POST", JSON.stringify(body));
        return res;
    }
}

export default root;