const express = require('express');
const connectDb = require('./config/db');
const routes = require("./routes/index");
const app = express();

connectDb();

app.use(express.json());
app.use(routes);

const PORT = 5000;
app.listen(PORT, () => {console.log(`Server Started on PORT:= ${PORT}`);});