const express = require("express");
// controllers
const userController = require("../controllers/user");

// utils
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({
  passError: true,
});

const router = express.Router();

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  type: Joi.string().required(),
});

router
  .get("/", userController.getAllUsers)
  .post("/", validator.body(schema), userController.createUser)
  .get("/:id", userController.getUserById)
  .delete("/:id", userController.deleteUserById);

module.exports = router;
