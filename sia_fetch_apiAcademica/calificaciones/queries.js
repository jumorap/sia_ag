export const queryListGrades = (args) => `
    {
      listGrades(id: "${args.id}", asignature: "${args.asignature}") {
        id
        id_asignature
        name
        percentage
        id_students
        values
      }
    }
`

export const queryListAsignatures = (args) => `
    {
      listAsignatures(id: "${args.id}", termn: "${args.termn}") {
        id
        term
        consolidated
      }
    }
`

export const queryListHistory = (args) => `
    {
      listHistory(id: "${args.id}", program: "${args.program}") {
        id
        id_student
        id_program
        percentage_adv
        asignature_taken
      }
    }
`

export const queryCreateGrades = (args) => `
    mutation {
      createGrades(
        id: "${args.id}"
        id_asignature: "${args.id_asignature}"
        name: "${args.name}"
        percentage: "${args.percentage}"
        id_students: "${args.id_students}"
        values: "${args.values}"
      ) {
        id
        id_asignature
        name
        percentage
        id_students
        values
      }
    }
`

export const queryUpdateGrades = (args) => `
    mutation {
      updateGrades(
        id: "${args.id}"
        id_asignature: "${args.id_asignature}"
        name: "${args.name}"
        percentage: "${args.percentage}"
        id_students: "${args.id_students}"
        values: "${args.values}"
      ) {
        id
        id_asignature
        name
        percentage
        id_students
        values
      }
    }
`

export const queryDeleteGrades = (args) => `
    mutation {
      deleteGrades(
        id: "${args.input}"
      ) {
        message
      }
    }
`

export const queryUpdateAsignatures = (args) => `
    mutation {
      updateAsignatures(
        id: "${args.id}"
        term: "${args.term}"
        consolidated: "${args.consolidated}"
      ) {
        id
        term
        consolidated
      }
    }
`

export const queryUpdateHistory = (args) => `
    mutation {
      updateHistory(
        id: "${args.id}"
        id_student: "${args.id_student}"
        id_program: "${args.id_program}"
        percentage_adv: "${args.percentage_adv}"
        asignature_taken: "${args.asignature_taken}"
      ) {
        id
        id_student
        id_program
        percentage_adv
        asignature_taken
      }
    }
`
