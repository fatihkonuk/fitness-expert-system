import express from "express";
import cors from 'cors';
import "dotenv/config";
import dbConnection from "./db/connection";
import routes from "./routes";
import {ErrorHandler, Logger} from "./middlewares/";

// Create an Express application
const app = express();

// Connect to the database
dbConnection();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

// Logger middleware
app.use(Logger);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api", routes);

app.use(ErrorHandler);

export default app;
