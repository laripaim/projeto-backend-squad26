require("dotenv").config();
const express = require("express");
const rotas = require("./rotas");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(rotas);

app.listen(process.env.PORT || 3000, () => { console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env); });