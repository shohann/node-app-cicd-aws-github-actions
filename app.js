const express = require("express");

// Initialize the app
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", message: "Service is running UPDATE" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
