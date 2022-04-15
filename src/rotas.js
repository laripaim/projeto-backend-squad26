const express = require('express');
const rotas = express();
const filtroLogin = require('./filtros/filtroLogin');
const { login } = require('./controladores/login');
const {
    subirImagem,
    deletarImagem
} = require('./controladores/imagens');
const {
    listarUsuarios,
    detalharUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario
} = require('./controladores/usuarios');

rotas.post('/upload', subirImagem);
rotas.post('/delete', deletarImagem);

rotas.get('/usuarios', listarUsuarios);
rotas.get('/usuarios/:id', detalharUsuario);
rotas.post('/usuarios', cadastrarUsuario);
rotas.put('/usuarios/:id', atualizarUsuario);
rotas.delete('/usuarios/:id', excluirUsuario);

rotas.post('/login', login);

rotas.use(filtroLogin);

module.exports = rotas;