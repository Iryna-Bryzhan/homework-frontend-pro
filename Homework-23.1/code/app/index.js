import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // импортируем cors
import { logger } from "../libs/logger.js";
import { todoRouter } from "./controller.js";

const app = express();

app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@todo.hxv0ya3.mongodb.net/?retryWrites=true&w=majority&appName=Todo`,
);

const db = mongoose.connection;

db.on("error", (error) => {
  logger.error(`Connection error: ${JSON.stringify(error)}`);
});
db.on("open", () => {
  logger.info("Connected to MongoDB 🎉🎉🎉");
});

const logRequestMiddleware =
  process.env.LOGGER_LEVEL === "debug"
    ? (req, res, next) => {
        logger.info(`${req.method}: '${req.path}'`);
        next();
      }
    : (req, res, next) => next();

app.use(express.json());
app.use(logRequestMiddleware);
app.use("/", todoRouter);

export { app };