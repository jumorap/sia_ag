import { buildSchema } from "graphql"

/**
 * The GraphQL schema in string form
 * @type {GraphQLSchema} schema
 */

const schema = buildSchema(`
    type Query {
        listAll: All
        listGrades(id: Int, course: String): [Grade]
        listCourse(id: Int, termn: String): [Course]
        listHistory(id: Int, program: Int): [History]
        getCourseName(id_course: String): Message
        formatStudents(course: String, student: String): [StudentsGrade]
        getDocAsignatures(documento_identidad: String): [DocAsignatures]
    }

    type DocAsignatures {
        id_curso: String
        documento_profesor: String
        codigo_asignatura: Int
        nameCourse: String
    }

    type StudentsGrade {
        id: Int
        id_student: String
        id_course: String
        grades: String
    }

    type All {
        history: [History]
        courses: [Course]
        grades: [Grade]
    }

    type Grade {
        id: Int
        id_course: String
        name: String
        percentage: Float
        grades: String
    }

    type Course{
        id: String
        id_asignature: Int
        term: String
        consolidated: Boolean
    }

    type History {
        id: Int
        id_student: String
        id_program: Int
        percentage_adv: Float
        asignature_taken: String
    }
    
    type Mutation {
        createGrades(
            id: Int
            id_course: String
            name: String
            percentage: Float
            grades: String
            ): Grade
            
        updateGrades(
            id: Int
            id_course: String
            name: String
            percentage: Float
            grades: String
            ): Grade
            
        deleteGrades(
            input: String
            ): Message

        updateCourse(
            id: String
            id_asignature: Int
            term: String
            consolidated: Boolean
            ): Course
            
        updateHistory(
            id: Int
            id_student: String
            id_program: Int
            percentage_adv: Float
            asignature_taken: [Int]
            ): History
    }

    type Message {
        message: String
    }
    `
)

export default schema