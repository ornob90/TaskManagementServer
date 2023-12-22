const User = require("../../models/User");

const getUniqueRoles = async (req, res, next) => {
  try {
    const uniqueRoles = await User.distinct("role");
    res.json({ uniqueRoles });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getUniqueRoles;
