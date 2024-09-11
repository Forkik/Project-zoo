const express = require("express");
const serverConfig = require("./config/serverConfig");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express()

serverConfig(app)

app.use('/api', indexRouter)

app.listen(PORT, () => {
  console.log(`Зоопарк на ${PORT} порту`);
});
