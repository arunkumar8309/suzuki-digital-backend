const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("./../Controller/userController");

const router = express.Router();

router.get("/getalluser", getAllUsers);
router.get("/:id", getUserById);
router.post("/create", createUser);
router.put("/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
