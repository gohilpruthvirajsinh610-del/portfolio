require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contact");

const app = express();

connectDB();

app.use(cors({
    origin: "https://gohilpruthvirajsinh610-del.github.io",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});