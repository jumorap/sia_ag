export const queryGetUsersInfo = (args) => `
    {
      user(history: ${args.history}, asignature: ${args.asignature}, grade: ${args.grade}) {
        _documento_identidad
        _id_historia
        _id_programa
        _porcentaje_avance
        _papa
        _pa
        _semestreActual
        _pappi
        _asignaturas {
          _codigo
          _nombre
          _creditos
          _tipo
          _periodo
          _esConsolidada
          _calificaciones {
            _nombre
            _nota
            _porcentaje
          }
          _definitiva
          _esAprobada
        }
      }
    }   
`
