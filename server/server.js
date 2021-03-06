const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./db/connectMongoDB");
const cookieParser = require("cookie-parser");

// Load Routes
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/carts");
const orderRoutes = require("./routes/order");

// ExpressJS App
const app = express();

// Enviroment Variables
dotenv.config({ path: "./config/config" });

// Database Connection
connectDB();

// Middlewares
app.use(express.json()); // Body Parser
app.use(
  cors({
    origin: "http://143.110.187.38",
    credentials: true,
  })
); // CORS
app.use(cookieParser()); // Cookie Parser

// Development mode logging
if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}

// Mount Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/order", orderRoutes);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
