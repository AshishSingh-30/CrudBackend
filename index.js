import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/TaskRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:3000",
  "https://crud-frontend-tawny.vercel.app",
];

app.use(express.json());

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);
