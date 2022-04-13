const knex = require('../bancodedados/conexao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginSchema = require('../validacoes/loginSchema');

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        await loginSchema.validate(req.body);
        const usuario = await knex("usuarios").where({ email }).first();

        if (!usuario) {
            return res.status(404).json("O usuário não foi encontrado");
        }

        const validacaoSenhaBcrypt = await bcrypt.compare(senha, usuario.senha);

        if (!validacaoSenhaBcrypt) {
            return res.status(400).json("O e-mail e a senha informados não conferem");
        }

        const token = jwt.sign({ id: usuario.id }, process.env.SENHA_JWT);

        const { senha: _, ...dadosUsuario } = usuario;

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = { login }