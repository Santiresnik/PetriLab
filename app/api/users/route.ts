import { NextResponse } from "next/server"
import { prisma } from '@/db'

export async function GET() {
    return NextResponse.json(await prisma.users.findMany())
}

export async function POST(req: Request) {
    let body = await req.json()
    let result = await prisma.users.create({
        data: {
            name: body.name,
            contra: body.contra,
            email: body.email
        }
    })
    return NextResponse.json(result)
}