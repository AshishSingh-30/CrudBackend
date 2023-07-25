import express from "express";

// const {
//   getTasks,
//   saveTask,
//   deleteTask,
//   updateTask,
// } = require("../controllers/TaskControllers");
import {getTasks, saveTask, deleteTask , updateTask} from "../controllers/TaskControllers.js"

const router = express.Router();

router.get("/get", getTasks);
router.post("/save", saveTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;
