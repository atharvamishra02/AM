const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();
console.log("Email:", process.env.EMAIL_USER);
console.log("Pass:", process.env.EMAIL_PASS);


const PORT = 5000;

const cors = require("cors");

app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend.vercel.app"],
  methods: ["GET", "POST"],
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Contact form route
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
    to: "yourgmail@gmail.com", // where you want to receive the message
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

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
