const getTaskByUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const tasks = await Task.find({ user: userId });
    res.send(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports = getTaskByUser;
