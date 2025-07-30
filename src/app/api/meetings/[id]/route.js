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
  status: { type: String, enum: ['pending', 'approved', 'declined'], default: 'pending' },
  declineReason: String, // optional, for notes on decline
  currentStatus: { type: String, enum: ['pending', 'scheduled', 'conducted', 'missed', 'rescheduled'], default: 'pending' },
  result: String, // outcome or notes after meeting
  resultReason: String, // reason for result (e.g., why missed/rescheduled)
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  decisionAt: Date // when approved/declined
});
const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export async function PATCH(req, context) {
  await dbConnect();
  const params = await context.params;
  try {
    const body = await req.json();
    console.log('PATCH /api/meetings/[id] body:', body);
    const updated = await Booking.findByIdAndUpdate(
      params.id,
      { $set: body },
      { new: true }
    );
    console.log('PATCH /api/meetings/[id] updated:', updated);
    if (!updated) {
      return NextResponse.json({ message: "Meeting not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ message: "Error updating meeting" }, { status: 500 });
  }
} 