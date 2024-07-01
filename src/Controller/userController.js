const User = require("./../Models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 200,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ status: 404, message: "User not found" });
    res.status(200).json({
      status: 200,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const createUser = async (req, res) => {
  const { user, interest, age, mobile, email } = req.body;

  // Add created_at timestamp
  const createdAt = new Date();
  const newUser = new User({
    user,
    interest,
    age,
    mobile,
    email,
    created_at: createdAt, // Assign created_at field
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({
      status: 201,
      message: "User created successfully",
      data: savedUser,
    });
  } catch (err) {
    res.status(400).json({ status: 400, message: err.message });
  }
};

const updateUser = async (req, res) => {
  const { user, interest, age, mobile, email } = req.body;

  const updatedAt = new Date();
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { user, interest, age, mobile, email, updated_at: updatedAt }, // Assign updated_at field
      { new: true }
    );
    if (!updatedUser)
      return res.status(404).json({ status: 404, message: "User not found" });
    res.status(200).json({
      status: 200,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    res.status(400).json({ status: 400, message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user)
      return res.status(404).json({ status: 404, message: "User not found" });
    res.status(200).json({
      status: 200,
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
