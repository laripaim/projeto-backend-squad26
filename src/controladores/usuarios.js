const knex = require("../bancodedados/conexao");
const cadastroUsuarioSchema = require("../validacoes/cadastroUsuarioSchema");
const atualizacaoUsuarioSchema = require("../validacoes/atualizacaoUsuarioSchema");

const listarUsuarios = async (req, res) => {

    try {
        const listaUsuarios = await knex("funcionarios")

        if(!listaUsuarios) {
            return res.status(400).json("Opa: não foi possível listar os clientes. Tente outra vez.");
        };

        return res.status(200).json(listaUsuarios);
    } catch (error) {
        return res.status(400).json(error.message);
    };
};

const detalharUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const usuarioDetalhado = await knex("funcionarios").where({  id });

        if(!usuarioDetalhado) {
            return res.status(400).json("Oh-oh: não foi possível localizar o usuário. Tente outra vez.");
        };

        res.status(200).json(usuarioDetalhado);
    } catch (error) {
        return res.status(400).json(error.message);
    };
};

const cadastrarUsuario = async (req, res) => {
    const { nome, 
            email, 
            linkedin, 
            skills, 
            biografia,
            senha,
            foto,
            cargo } = req.body;

    try {
        await cadastroUsuarioSchema.validate(req.body);

        const existeUsuario = await knex("funcionarios")
            .where({ email })
            .first();

        if (existeUsuario) {
            return res.status(400).json("Opa: o e-mail informado já foi cadastrado!");
        }

        const usuario = await knex("funcionarios")
            .insert({
                nome,
                email,
                linkedin, 
                skills, 
                biografia,
                senha,
                foto,
                cargo
            })
            .returning("*");

        if (!usuario) {
            return res.status(400).json("Deu ruim: o usuário não foi cadastrado.");
        }

        return res.status(200).json("Usuário cadastrado com sucesso!");
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const atualizarUsuario = async (req, res) => {
    const { 
        nome, 
        email,
        linkedin, 
        skills, 
        biografia,
        senha,
        foto,
        cargo } = req.body;
    const { id } = req.params;

        try {
   
            await atualizacaoUsuarioSchema.validate(req.body);
        
            const usuarioAtualizado = await knex("funcionarios")
            .where({ id })
            .update({
                nome,
                email,
                linkedin,
                skills,
                biografia,
                senha,
                foto,
                cargo
            })
            .returning("*");

        if (!usuarioAtualizado) {
            res.status(400).json("Não foi possível atualizar o usuario, tente novamente.")
        };
        
        res.status(200).json("Tudo certo: informações atualizadas com sucesso.");
        } catch (error) {
            return res.status(400).json(error.message);
        }
};

const excluirUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const deletarUsario = await knex("funcionarios").del().where({ id }).returning("*");

        if(!deletarUsario) {
            return res.status(400).json("Não foi possível excluir o usuário. Tente outra vez.");
        };

        res.status(200).json("Usuário excluído com sucesso.");
    } catch (error) {
        return res.status(400).json(error.message);
    };
};

module.exports = { 
    listarUsuarios,
    detalharUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario
 };