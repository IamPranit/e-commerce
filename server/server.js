const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./db/connectMongoDB");

// ExpressJS App
const app = express();

// Enviroment Variables
dotenv.config({ path: "./config/config" });

// Database Connection
connectDB();

// Middlewares
app.use(express.json()); // Body Parser
app.use(cors()); // CORS

// Development mode logging
if (process.env.NODE_ENV) {
  app.use(morgan("dev"));
}

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
