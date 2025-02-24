require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
  app.use("/guides", require("./routes/guideRoutes.js"));
  app.use("/user", require("./routes/userRoutes.js"));
  app.use("/destination", require("./routes/destinationRoutes.js"));
app.use("/auth", require("./routes/authRoutes.js"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
