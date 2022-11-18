const { user } = require("../models");

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const createdUser = await user.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      createdUser,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = await user.findOne({
      where: { id: userId },
    });
    if (!userData) {
      throw new Error("User not found");
    }
    res.status(200).json({
      userData,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const [updated] = await user.update(req.body, {
      where: { id: userId },
    });
    if (updated) {
      const updatedUser = await user.findOne({ where: { id: userId } });
      res.status(200).json({
        user: updatedUser,
      });
    }
    throw new Error("User not found");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deleted = await user.destroy({
      where: { id: userId },
    });
    if (!deleted) {
      throw new Error("User not found");
    }
    res.status(204).send("User deleted");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await user.findAll();
    if(!users){
        throw new Error("No users found");
    }
    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
