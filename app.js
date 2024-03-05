const express = require("express");
const connectDB = require('./config/db');
const routes = require("./routes")
const cors = require('cors');

connectDB();
const app = express();
app.use(express.json());
app.use(routes)

const port = 5000;
app.listen(port, () => {console.log(`server started on PORT: ${port}`)})