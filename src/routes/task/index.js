const addTask = require("../../api/task/addTask");

const router = require("express").Router();

// POST
router.post("/tasks", addTask);

module.exports = router;
