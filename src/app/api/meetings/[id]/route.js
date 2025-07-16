import { dbConnect } from "@/app/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Booking model (same as in meetings/route.js)
const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  purpose: String,
  date: String,
  time: String,
  callType: String,
  status: String,
  reason: String,
  result: String,
  rejectionReason: String,
});
const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export async function PATCH(req, context) {
  await dbConnect();
  const params = await context.params;
  try {
    const body = await req.json();
    const updated = await Booking.findByIdAndUpdate(params.id, body, { new: true });
    if (!updated) {
      return NextResponse.json({ message: "Meeting not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ message: "Error updating meeting" }, { status: 500 });
  }
} 