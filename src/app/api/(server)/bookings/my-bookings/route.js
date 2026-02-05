import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
      const email = await req.nextUrl.searchParams.get("email");
      
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
      }

      const cursor = dbConnect(collections.BOOKINGS).find({
        email: email});
      const result = await cursor.toArray();

    return NextResponse.json(result);
      
  } catch (error) {console.error(error);
  return NextResponse.json(
    { error: "Failed to bookings data" },
    { status: 500 },
  );}
}


export async function PATCH(req) {
  try {
    const email = await req.nextUrl.searchParams.get("email");
    const { bookingId, bookingStatus } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const updateStatus = {
      $set: {
        bookingStatus,
      },
    };

    const result = await dbConnect(collections.BOOKINGS).updateOne(
      {
        email: email,
        _id: new ObjectId(bookingId),
      },
      updateStatus,
    );


    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to bookings data" },
      { status: 500 },
    );
  }
}



