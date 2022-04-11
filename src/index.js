require("dotenv").config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const express = require("express");
const rotas = require("./rotas");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(rotas);

app.listen(process.env.DB_PORT || 3000);