import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import * as bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, password, phone, photoURL } = body;


    const existingUser = await dbConnect(collections.USERS).findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      fullName,
      email,
      password: hashedPassword,
      phone,
      photoURL,
      createdAt: new Date(),
    };

    await dbConnect(collections.USERS).insertOne(newUser);

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}