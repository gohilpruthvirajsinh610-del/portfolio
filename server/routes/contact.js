const express = require("express");
const Contact = require("../models/Contact");
const sendContactEmail = require("../services/emailService");

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    // Save message to MongoDB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Send email notification
    await sendContactEmail({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully.",
      data: {
        id: contact._id,
      },
    });

  } catch (error) {
    console.error("Contact form error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

module.exports = router;