const addTask = require("../../api/task/addTask");
const getTaskByUser = require("../../api/task/getTaskByUser");

const router = require("express").Router();

// GET
router.get("/tasks/:userId", getTaskByUser);

// POST
router.post("/tasks", addTask);

module.exports = router;
