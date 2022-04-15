require('dotenv').config();
const express = require('express');
const rotas = require('./rotas');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

app.use(express.json());
app.use(cors());
app.use(rotas);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('./swagger.json')));

app.listen(process.env.PORT || 3000);