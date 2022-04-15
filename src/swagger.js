const swaggerAutogen = require('swagger-autogen');

swaggerAutogen()('./src/swagger.json', ['./src/rotas.js']);