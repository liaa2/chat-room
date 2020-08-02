// models
const UserModel = require("../models/User");

const getAllUsers = async (req, res) => {};
const getUserById = async (req, res) => {};
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, type } = req.body;
    const user = await UserModel.createUser(firstName, lastName, type);
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.stauts(500).json({ success: false, error });
  }
};
const deleteUserById = async (req, res) => {};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
};
