import { NextResponse } from "next/server"

const axios = require('axios');
const https = require('https'); // Import the 'https' module


export async function GET() {

    const imageUrl = req.body.image_url; // Assuming your JSON payload has an "image_url" field

    // Create an https agent
    const agent = new https.Agent({
      rejectUnauthorized: false, // Disable SSL certificate verification (not recommended for production)
    });

    // Send the image URL to the FastAPI server for processing

    // Process the response from the FastAPI server
    
  }

export async function POST(req: Request) {
    let body = await req.json()
    let agent = await https.Agent({
        rejectUnauthorized: false, 
      });
    let result = await axios.post('https://petrilabapi.onrender.com/process_image/', {
        image_url: imageUrl,
      }, {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      });
    return NextResponse.json(result)
    const predictedCount = result.data.predicted_count;
}