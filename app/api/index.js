const mysql = require("mysql2");
const dotenv = require("dotenv");
const axios = require('axios');
const cors = require('cors');
const https = require('https'); // Import the 'https' module
const express = require('express');
dotenv.config();

const app = express();

// Middleware for handling CORS using the cors middleware
const corsOptions = {
  origin: '*',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
};

// app.use(cors());

// Middleware for parsing JSON requests
app.use(express.json());

// Define a route for the root
app.get("/", (req, res) => {
  res.send("Welcome to Planetscale API PetriLab!");
});

// Define a route for processing images
app.get('/process_image', async (req, res) => {
  try {
    const imageUrl = req.body.image_url; // Assuming your JSON payload has an "image_url" field

    // Create an https agent
    const agent = new https.Agent({
      rejectUnauthorized: false, // Disable SSL certificate verification (not recommended for production)
    });

    // Send the image URL to the FastAPI server for processing
    const response = await axios.post('https://petrilabapi.onrender.com/process_image/', {
      image_url: imageUrl,
    }, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
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
