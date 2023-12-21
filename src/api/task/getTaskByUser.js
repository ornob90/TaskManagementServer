const Task = require("../../models/task");

const getTaskByUser = async (req, res, next) => {
  try {
    const { email } = req.params;

    const tasks = await Task.find({ userEmail: email });
    res.send(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports = getTaskByUser;
