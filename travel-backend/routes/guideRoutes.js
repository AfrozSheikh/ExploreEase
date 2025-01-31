const express = require("express");
const User = require("../models/User"); // Using User model since Guide is a role
const router = express.Router();

// Fetch all guides with full info
router.get("/all", async (req, res) => {
  try {
    const guides = await User.find({ role: "guide" });
    console.log(guides);
    
    res.json(guides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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
  
  // Guide updates availability
  router.put("/update-availability", authMiddleware, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
  
      if (!user) return res.status(404).json({ error: "User not found" });
      if (user.role !== "guide") return res.status(403).json({ error: "Access denied. Only guides can update availability." });
  
      user.availability = req.body.availability;
      await user.save();
      
      res.json({ message: "Availability updated successfully!", availability: user.availability });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })

module.exports = router;
