const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../DBmodels/user");
const { authenticate } = require("../middleware/authenticate");

const router = express.Router();

// ✅ Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, contactNo, password, role, profile } = req.body;

  try {
    // ✅ Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // ✅ Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create a new user
    const newUser = new User({
      name,
      email,
      contactNo,
      password: hashedPassword,
      role,
      profile,
    });

    await newUser.save();

    // ✅ Generate JWT Token
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET || "temp_secret",
      { expiresIn: "1h" }
    );

    res.status(201).json({ message: "User registered successfully", token, user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
});

// ✅ Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // ✅ Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Generate JWT Token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "temp_secret",
      { expiresIn: "1h" }
    );

    // ✅ Set token in cookies (for security, set `secure: true` in production)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Enable secure cookies in production
      sameSite: "None",
      expires: new Date(Date.now() + 3600000), // 1 hour expiry
    });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
});

// ✅ Get User Profile (Protected Route)
router.get("/profile", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Remove password from response
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Profile retrieval failed", error: error.message });
  }
});

// ✅ Update User Profile (Protected Route)
router.put("/profile", authenticate, async (req, res) => {
  try {
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select("-password");

    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Profile update failed", error: error.message });
  }
});

// ✅ Delete User Profile (Protected Route)
router.delete("/profile", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await User.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "User profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting profile:", error);
    res.status(500).json({ message: "Profile deletion failed", error: error.message });
  }
});

module.exports = router;
