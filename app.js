const express = require("express");
const connectDb = require("./config/db");
const routes = require("./routes/index");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
connectDb();
app.use(routes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Started on PORT:= ${PORT}`);
});
