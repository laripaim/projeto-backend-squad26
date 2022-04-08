const yup = require("./yup");

const atualizacaoUsuarioSchema = yup.object().shape({
    nome: yup
        .string()
        .required("Opa: o campo nome é obrigatório!"),

    email: yup
        .string()
        .email(),

    linkedin: yup
        .string(),
    
    skills: yup
        .string()
        .required("Opa: o campo skills é obrigatório!"),

    biografia: yup
        .string() 
});

module.exports = atualizacaoUsuarioSchema;