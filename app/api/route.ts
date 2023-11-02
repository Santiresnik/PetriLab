import { NextResponse } from "next/server"


export async function GET() {
  return NextResponse.json("Holaaaa")
}

/*
const axios = require('axios');
const https = require('https'); // Import the 'https' module


export async function GET(req: Request, { params: { id } }: Props) {

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

}
*/