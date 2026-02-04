import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
      const email = await req.nextUrl.searchParams.get("email");
      console.log(email);
      
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
      }

      const cursor = dbConnect(collections.BOOKINGS).find({
        email: email,
        bookingStatus: "Pending",
      });
      const result = await cursor.toArray();

    return NextResponse.json(result);
      
  } catch (error) {console.error(error);
  return NextResponse.json(
    { error: "Failed to bookings data" },
    { status: 500 },
  );}
}
