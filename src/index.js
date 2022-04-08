require("dotenv").config();
const express = require("express");
const rotas = require("./rotas");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(rotas);

app.listen(3000);