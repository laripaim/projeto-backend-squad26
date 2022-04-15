const yup = require("./yup");

const cadastroUsuarioSchema = yup.object().shape({
    nome: yup
        .string()
        .required(),

    email: yup
        .string()
        .email()
        .required(),

    linkedin: yup
        .string(),
    
    skills: yup
        .string()
        .required(),

    biografia: yup
        .string()
});

module.exports = cadastroUsuarioSchema;