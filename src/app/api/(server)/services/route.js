import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const collection = await dbConnect(collections.SERVICES);
    const result = await collection.find().toArray();

    return NextResponse.json(result);
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { message: "Failed to fetch services" },
      { status: 500 },
    );
  }
}
