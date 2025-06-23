const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();

const cors = require("cors");

app.use(cors({
  origin: "https://atharvamishra3.vercel.app", // replace with your actual frontend URL
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true,
}));

app.use(express.json());

app.get("/contact", (req, res) => {
  res.send("API is working");
});

app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "yourgmail@gmail.com", // Change this
    subject: `Contact form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
});

// 👉 Export the handler for Vercel
module.exports = app;
