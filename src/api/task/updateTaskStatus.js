const { ObjectId } = require("mongodb");
const Task = require("../../models/task");

const updateTaskStatus = async (req, res, next) => {
  try {
    const { status } = req.body || {};

    const { id } = req.params;

    if (!status) {
      return res
        .status(400)
        .send({ status: "Bad Request", message: "Invalid status" });
    }

    const response = await Task.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status,
        },
      }
    );

    res.send({
      updateOne: response.modifiedCount > 0,
      status: response.acknowledged,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = updateTaskStatus;
