const addTask = require("../../api/task/addTask");
const deleteTask = require("../../api/task/deleteTask");
const getTaskByUser = require("../../api/task/getTaskByUser");

const router = require("express").Router();

// GET
router.get("/tasks/:userId", getTaskByUser);

// POST
router.post("/tasks", addTask);

// DELETE
router.delete("/tasks/:id", deleteTask);

module.exports = router;
