const { ObjectId } = require("mongodb");
const Task = require("../../models/task");

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.deleteOne({ _id: new ObjectId(id) });

    res.send({
      deleteOne: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTask;
