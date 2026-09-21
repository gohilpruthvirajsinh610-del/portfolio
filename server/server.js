require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contact");

const app = express();

connectDB();

app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Portfolio API is running"
    });
});

module.exports = app;