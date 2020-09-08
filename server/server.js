const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();

// Body Parser
app.use(express.json());

// CORS
app.use(cors());

dotenv.config({ path: "./config/config" });

// Development mode logging
if (process.env.NODE_ENV) {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
