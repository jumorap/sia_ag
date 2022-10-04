export const queryGetUsersInfo = (args) => `
    {
      user(username: "${args.username}") {
        nombre_usuario
        nombre_completo
        documento_identidad
        lugar_expedicion
        sexo
        etnia
        email_personal
        email_institucional
        telefono_movil
        fecha_nacimiento
        lugar_nacimiento
        nacionalidad
        tipo_sangre
        eps
        situacion_militar
        responsables {
            responsable_nombre
            responsable_tipo_doc
            responsable_numero_doc
            responsable_telefono
        }
        vivienda {
            vivienda_tipo
            vivienda_direccion
            vivienda_departamento
            vivienda_codigo_postal
            vivienda_telefono
            vivienda_estrato
        }
      }
    }
`

export const queryUpdateUser = (args) => `
    mutation {
      updateUser(
        nombre_usuario: "${args.nombre_usuario}"
        lugar_expedicion: "${args.lugar_expedicion}"
        email_personal: "${args.email_personal}"
        telefono_movil: "${args.telefono_movil}"
        eps: "${args.eps}"
        situacion_militar: "${args.situacion_militar}"
        vivienda: [
        {
          vivienda_tipo: "p"
          vivienda_direccion: ""
          vivienda_departamento: ""
          vivienda_codigo_postal: ""
          vivienda_telefono: ""
          vivienda_estrato: ""
        },
        {
          vivienda_tipo: "a"
          vivienda_direccion: "${args.vivienda[1].vivienda_direccion}"
          vivienda_departamento: "${args.vivienda[1].vivienda_departamento}"
          vivienda_codigo_postal: "${args.vivienda[1].vivienda_codigo_postal}"
          vivienda_telefono: "${args.vivienda[1].vivienda_telefono}"
          vivienda_estrato: "${args.vivienda[1].vivienda_estrato}"
        },
      ]
      ) {
        nombre_usuario
        eps
      }
    }
`
