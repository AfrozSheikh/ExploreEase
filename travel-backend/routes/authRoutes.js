const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();


// Register
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role, gender } = req.body;

    if (role === "guide" && !gender) {
      return res.status(400).json({ error: "Gender is required for guides." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role, gender });

    await user.save();
    res.json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const authMiddleware = require("../authMiddleware/middleware"); // Create this middleware for authentication

// Update selectedTransport & selectedDestination
router.post("/update-booking", authMiddleware, async (req, res) => {
  try {
    const { selectedTransport, selectedDestination } = req.body;

    if (!selectedTransport || !selectedDestination) {
      return res.status(400).json({ error: "Transport and Destination data are required" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { selectedTransport, selectedDestination },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "Booking details updated successfully", user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});






module.exports = router;
