/**
 * Queries
 */
export const queryListAll = () => `
  {
    listAll
    {
      history {
        id
      }
      courses {
        id
      }
      grades {
        id
      }
    }
  }
`
export const queryListGrades = (args) => `
  {
    listGrades(id: ${args.id}, course: ${args.course})
    {
      id
      id_course
      name
      percentage
      grades
    }
  }
`

export const queryListCourse = (args) => `
  {
    listCourse(id: ${args.id}, termn: "${args.termn}")
    {
      id
      id_asignature
      term
      consolidated
    }
  }
`

export const queryListHistory = (args) => `
  {
    listHistory(id: ${args.id}, program: ${args.program})
    {
      id
      id_student
      id_program
      percentage_adv
      asignature_taken
    }
  }
`

export const queryGetCourseName = (args) => `
  {
    getCourseName(id_course: ${args.id_course})
    {
      message
    }
  }
`

export const queryFormatStudents = (args) => `
  {
    formatStudents(course: ${args.course}, student: "${args.student}")
    {
      id
      id_student
      id_course
      grades
    }
  }
`

/**
 * Mutations
 */

export const queryCreateGrades = (args) => `
  mutation {
    createGrades(
      id: ${args.id}
      id_course: ${args.id_course}
      name: "${args.name}"
      percentage: ${args.percentage}
      grades: "${args.grades}"
    )
    {
      id
      id_course
      name
      percentage
      grades
    }
  }
`

export const queryUpdateGrades = (args) => `
  mutation {
    updateGrades(
      id: ${args.id}
      id_course: ${args.id_course}
      name: "${args.name}"
      percentage: ${args.percentage}
      grades: "${args.grades}"
    )
    {
      id
      id_course
      grades
    }
  }
`

export const queryDeleteGrades = (args) => `
  mutation {
    deleteGrades(input: ${args.input})
    {
      message
    }
  }
`

export const queryUpdateCourse = (args) => `
  mutation {
    updateCourse(
      id: ${args.id}
      id_asignature: ${args.id_asignature}
      term: "${args.term}"
      consolidated: ${args.consolidated}
    )
    {
      id
	    term
    }
  }
`

export const queryUpdateHistory = (args) => `
  mutation {
    updateHistory(
      id: ${args.id}
      id_student: "${args.id_student}"
      id_program: ${args.id_program}
      percentage_adv: ${args.percentage_adv}
      asignature_taken: ${args.asignature_taken}
    )
    {
      id
      id_student
      percentage_adv
    }
  }
`
