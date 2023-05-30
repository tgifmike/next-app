import { NextResponse } from "next/server";
//import { prisma } from "../../lib/prisma";
import { hash } from "bcrypt";
import { prisma } from "@/app/(site)/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userName, email, password } = await req.json();
    const hashed = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        userName,
        email,
        password: hashed,
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err: any) {
    return (
      new NextResponse(
        JSON.stringify({
          error: err.message,
        })
      ),
      {
        status: 500,
      }
    );
  }
}
