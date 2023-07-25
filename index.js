// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import cors from "cors"
import routes from "./routes/TaskRoute.js"

// const routes = require("./routes/TaskRoute");
// const cors = require("cors");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://crud:crud@cluster0.eyruw3u.mongodb.net/Tasks?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected."))
  .catch((err) => console.log(err));


app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
