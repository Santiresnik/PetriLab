import { NextResponse } from "next/server"

const axios = require('axios');
const https = require('https'); // Import the 'https' module

type Props = {
  params: {
      image_url: string
  }
} 


export async function GET(req: Request, { params: { image_url } }: Props) {
  const header = 
  {
    'Content-Type': 'application/json'
  }

  const body = 
  {
    'image_url': 'https://res.cloudinary.com/dso4vg1hw/image/upload/f_auto,q_auto/fknm0eyvz0lzhrrykdwy'
  }

  let response = await axios.post('https://petrilabapi.onrender.com/process_image/',body, header);
  console.log(response)
  
  }
