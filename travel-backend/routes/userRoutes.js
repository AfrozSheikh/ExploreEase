const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Middleware to verify token
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

// Fetch logged-in user data
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Book a guide for a user
router.post("/book-guide", authMiddleware, async (req, res) => {
  try {
    const { guideId, guideName, guideEmail, guideGender } = req.body;

    if (!guideId || !guideName || !guideEmail || !guideGender) {
      return res.status(400).json({ error: "All guide details are required." });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Update selectedGuide field in the user document
    user.selectedGuide = {
      id: guideId,
      name: guideName,
      email: guideEmail,
      gender: guideGender,
    };

    await user.save();

    res.json({ message: "Guide booked successfully.", selectedGuide: user.selectedGuide });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
