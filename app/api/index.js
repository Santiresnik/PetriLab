const mysql = require("mysql2");
const dotenv = require("dotenv");
const axios = require('axios');
const express = require('express');
dotenv.config();

const app = express();


// Middleware for parsing JSON requests
app.use(express.json());


// Define a route for the root
app.get("/api", (req, res) => {
  res.send("Welcome to Planetscale API PetriLab!");
});

// Define a route for processing images
app.post('/process_image', async (req, res) => {
  try {
    const imageUrl = req.body.image_url; // Assuming your JSON payload has an "image_url" field

    // Send the image URL to the FastAPI server for processing
    const response = await axios.post('http://127.0.0.1:8000/process_image/', {
      image_url: imageUrl,
    });

    // Process the response from the FastAPI server
    const predictedCount = response.data.predicted_count;

    res.json({ predicted_count: predictedCount });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a catch-all route for 404 errors
app.use("*", (req, res) => {
  res.status(404).send("404 - Not Found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port", port);
});
