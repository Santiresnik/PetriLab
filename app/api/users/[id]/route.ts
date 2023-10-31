import { NextResponse } from "next/server"
import { prisma } from '@/db'

type Props = {
    params: {
        id: string
    }
} 
export async function GET(req: Request, { params: { id } }: Props) {    
    let result = await prisma.users.findUnique({
    where: {
        id: parseInt(id)
    }
    })
  return NextResponse.json(result)
}
