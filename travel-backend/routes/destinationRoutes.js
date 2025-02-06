// // routes/destinationRoutes.js
// const express = require("express");
// const router = express.Router();
// const destinations = require("../data/destinations"); // Import your destinations data

// // Get destination coordinates by name
// router.get("/coordinates/:name", (req, res) => {
//   const { name } = req.params;
//   const destination = destinations.find((dest) => dest.name === name);

//   if (destination) {
//     // For simplicity, return hardcoded coordinates
//     const coordinates = {
//       EiffelTower: { lat: 48.8584, lng: 2.2945 },
//       TajMahal: { lat: 27.1751, lng: 78.0421 },
//       // Add more destinations as needed
//     };

//     const destinationCoords = coordinates[destination.name.replace(/\s/g, "")];
//     if (destinationCoords) {
//       res.json(destinationCoords);
//     } else {
//       res.status(404).json({ error: "Destination coordinates not found" });
//     }
//   } else {
//     res.status(404).json({ error: "Destination not found" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const destinations = require("../data/destinations"); // Import your destinations data

// Get destination coordinates by name
router.get("/coordinates/:name", (req, res) => {
  const { name } = req.params;
  const destination = destinations.find((dest) => dest.name === name);
  console.log(name);
  
  if (destination) {
    // Coordinates for all destinations
    const coordinates = {
      TajMahal: { lat: 27.1751, lng: 78.0421 },
      RedFortIndiaGate: { lat: 28.6562, lng: 77.241 },
      GhatsKashiVishwanath: { lat: 25.3176, lng: 83.0058 },
      RishikeshHaridwar: { lat: 30.0869, lng: 78.2676 },
      PinkCity: { lat: 26.9124, lng: 75.7873 },
      LehLadakh: { lat: 34.1526, lng: 77.5771 },
      ShimlaManali: { lat: 31.1048, lng: 77.1734 },
      DarjeelingSikkim: { lat: 27.036, lng: 88.2627 },
      MumbaiGatewayOfIndiaMarineDrive: { lat: 19.07, lng: 72.8347 },
      GoaBeachesChurches: { lat: 15.2993, lng: 74.124 },
      RannOfKutch: { lat: 23.7333, lng: 70.1333 },
      AlleppeyMunnarKovalam: { lat: 9.4981, lng: 76.3388 },
      Hampi: { lat: 15.335, lng: 76.46 },
      MysorePalace: { lat: 12.3051, lng: 76.6552 },
      OotyCoorg: { lat: 11.4102, lng: 76.695 },
      VictoriaMemorialHowrahBridge: { lat: 22.5448, lng: 88.3426 },
      CherrapunjiShillong: { lat: 25.3005, lng: 91.5822 },
      KazirangaNationalPark: { lat: 26.5748, lng: 93.171 },
      Khajuraho: { lat: 24.8525, lng: 79.9335 },
      KanhaBandhavgarhNationalParks: { lat: 22.3458, lng: 80.6318 },
      AjantaElloraCaves: { lat: 20.5518, lng: 75.7033 },
      ShirdiSaiBabaTemple: { lat: 19.4808, lng: 74.4836 },
      LonavalaKhandala: { lat: 18.7522, lng: 73.4057 },
      SinhagadFort: { lat: 18.3667, lng: 73.75 },
      ElephantaCaves: { lat: 18.9633, lng: 72.9315 },
    };

    // Replace spaces and special characters in the destination name to match the key in coordinates
    const destinationKey = destination.name.replace(/[ ,&]/g, "");
    const destinationCoords = coordinates[destinationKey];

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