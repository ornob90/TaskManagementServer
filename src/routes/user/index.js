const addUser = require("../../api/user/addUser");
const getSingleUser = require("../../api/user/getSingleUser");
const getUniqueRoles = require("../../api/user/getUniqueRoles");

const router = require("express").Router();

// GET
router.get("/user/:email", getSingleUser);
router.get("/user-role", getUniqueRoles);

// POST
router.post("/user", addUser);

module.exports = router;
