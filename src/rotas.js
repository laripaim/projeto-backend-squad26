const express = require('express');
const rotas = express();
const {
    listarUsuarios,
    detalharUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario,
    obterStatus
} = require('./controladores/usuarios');

rotas.get('/usuarios', listarUsuarios);
rotas.get('/usuarios/:id', detalharUsuario);
rotas.post('/usuarios', cadastrarUsuario);
rotas.put('/usuarios/:id', atualizarUsuario);
rotas.delete('/usuarios/:id', excluirUsuario);
rotas.get('/status', obterStatus);

module.exports = rotas;