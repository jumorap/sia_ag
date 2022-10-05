export const queryCursos = (args) => `
    {
      cursos(id: "${args.id}") {
        id_curso
        documento_estudiante
      }
    }
`

export const queryIngresaCurso = (args) => `
    mutation {
      ingresarCurso(
        id_curso: "${args.id_curso}"
        codigo_asignatura: ${args.codigo_asignatura}
        grupo: ${args.grupo}
        horarios: {
          dia: ${args.horarios.dia}
          hora_inicio: ${args.horarios.hora_inicio}
          hora_fin: ${args.horarios.hora_fin}
          salon: "${args.horarios.salon}"
          documento_profesor: "${args.horarios.documento_profesor}"
          tipo: "${args.horarios.tipo}"
        }
        cupos_disponibles: ${args.cupos_disponibles}
        cupos_totales: ${args.cupos_totales}
      ) {
        message
      }
    }
`

export const queryInscribirEstudiante = (args) => `
    mutation {
      inscribirEstudiante(
        id_curso: "${args.id_curso}"
        documento_estudiante: "${args.documento_estudiante}"
      ) {
        message
      }
    }
`

export const queryIngresarProfesor = (args) => `
    mutation {
      ingresarProfesor(
        documento_identidad: "${args.documento_identidad}"
        nombre_completo: "${args.nombre_completo}"
        email_institucional: "${args.email_institucional}"
      ) {
        message
      }
    }
`
