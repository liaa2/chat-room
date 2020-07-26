const express = require("express");
// controllers
const userController = require("../controllers/user");

const router = express.Router();

router
  .get("/", userController.getAllUsers)
  .post("/", userController.createUser)
  .get("/:id", userController.getUserById)
  .delete("/:id", userController.deleteUserById);

module.exports = router;
