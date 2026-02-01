import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
    try {
        const { serviceId } = await params;

      if (!ObjectId.isValid(serviceId)) {
        return NextResponse.json(
          { error: "Invalid service ID" },
          { status: 400 },
        );
      }
      const service = await dbConnect(collections.SERVICES).findOne({
        _id: new ObjectId(serviceId),
      });

      if (!service)
        return NextResponse.json(
          { error: "Service not found" },
          { status: 404 },
        );

      return NextResponse.json(service);
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to fetch service" },
        { status: 500 },
      );
    }

    
}