import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // Basic validation
    if (!body.totalCost || !body.title) {
      return NextResponse.json(
        { error: "TotalCost and TotalCost required" },
        { status: 400 },
      );
    }

    const result = await dbConnect(collections.BOOKINGS).insertOne({
      ...body,
    });

    // client.close();
    return NextResponse.json(
      { message: "Service booking successfull.", id: result.insertedId },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to service booking" },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  try {
    const email = await req.nextUrl.searchParams.get("email");

    // Basic validation
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const cursor =  dbConnect(collections.BOOKINGS)
      .find({ email })
      const result = await cursor.toArray();

    // client.close();
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to bookings data" },
      { status: 500 },
    );
  }
}
