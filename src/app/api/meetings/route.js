import { dbConnect } from "@/app/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Booking model (same as in book-call/route.js)
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

export async function GET() {
  await dbConnect();
  const meetings = await Booking.find().sort({ date: 1, time: 1 });
  return NextResponse.json({ meetings });
}
