import { NextResponse } from "next/server"

const axios = require('axios');
const https = require('https'); // Import the 'https' module

type Props = {
  params: {
      image_url: string
  }
} 


export async function GET(req: Request, { params: { image_url } }: Props) {

  //const imageUrl = req.body.image_url; // Assuming your JSON payload has an "image_url" field

  // Create an https agent
  /*const agent = new https.Agent({
    rejectUnauthorized: false, // Disable SSL certificate verification (not recommended for production)
  });*/
  let body = await req.json()
    image_url = "https://res.cloudinary.com/dso4vg1hw/image/upload/f_auto,q_auto/fknm0eyvz0lzhrrykdwy"
    // let agent = await https.Agent({
    //     rejectUnauthorized: false, 
    //   });
    let result = await axios.post('https://petrilabapi.onrender.com/process_image/', {
        imageUrl: image_url,
      }
      , {
      //   httpsAgent: new https.Agent({
      //     rejectUnauthorized: false,
      //   }),
      });
    return NextResponse.json(result)
    const predictedCount = result.data.predicted_count;
    
  }

/*export async function POST(req: Request) {
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
}*/