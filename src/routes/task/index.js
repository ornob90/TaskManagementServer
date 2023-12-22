const addTask = require("../../api/task/addTask");
const deleteTask = require("../../api/task/deleteTask");
const getTaskByUser = require("../../api/task/getTaskByUser");
const updateTaskStatus = require("../../api/task/updateTaskStatus");

const router = require("express").Router();

// GET
router.get("/tasks/:email", getTaskByUser);

// POST
router.post("/tasks", addTask);

// PATCH
router.put("/tasks/:id", updateTaskStatus);

// DELETE
router.delete("/tasks/:id", deleteTask);

module.exports = router;
