import { root } from "./resolver.js"
import routes from "../../routes.js"


// Expose the API URL
export const API_URL = routes.apiAcademica.buscadorMaterias.url

// Expose the schema and the resolver
export const FETCH_BUSCADOR_CURSOS = root

/*
{
  asignaturas {
    codigo_asignatura
    nombre_asignatura
    creditos
    descripcion
    tipo {
      id_tipologia
      nombre_tipologia
    }
    programa {
      id_programa
      nombre_programa
      facultad {
        sede {
          nombre_sede
        }
        nombre_facultad
      }
    }
  }
}
*/
