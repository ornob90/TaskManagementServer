const Task = require("../../models/task");

const addTask = async (req, res, next) => {
  try {
    const data = req.body;

    if (!data) {
      return res
        .status(400)
        .send({ status: "Bad Request!!", message: "No Data Found!!" });
    }

    const task = new Task(data);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = addTask;
