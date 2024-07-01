const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./src/Routes/UserRoutes");
const connectDB = require("./src/Config/server");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mongo Connection Function call
connectDB();

// Routes
app.use("/api/users", userRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server start in this ${PORT}`);
});
