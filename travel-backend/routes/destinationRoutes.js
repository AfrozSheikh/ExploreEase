// routes/destinationRoutes.js
const express = require("express");
const router = express.Router();
const destinations = require("../data/destinations"); // Import your destinations data

// Get destination coordinates by name
router.get("/coordinates/:name", (req, res) => {
  const { name } = req.params;
  const destination = destinations.find((dest) => dest.name === name);

  if (destination) {
    // For simplicity, return hardcoded coordinates
    const coordinates = {
      EiffelTower: { lat: 48.8584, lng: 2.2945 },
      TajMahal: { lat: 27.1751, lng: 78.0421 },
      // Add more destinations as needed
    };

    const destinationCoords = coordinates[destination.name.replace(/\s/g, "")];
    if (destinationCoords) {
      res.json(destinationCoords);
    } else {
      res.status(404).json({ error: "Destination coordinates not found" });
    }
  } else {
    res.status(404).json({ error: "Destination not found" });
  }
});

module.exports = router;