import { dbConnect } from "@/app/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Booking model
const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  purpose: String,
  date: String,
  time: String,
  callType: String,
});
BookingSchema.index({ date: 1, time: 1, callType: 1 }, { unique: true });

const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

// Time slot generator
function generateTimeSlots(start = 9, end = 18, duration = 30) {
  const slots = [];
  for (let hour = start; hour < end; hour++) {
    for (let min = 0; min < 60; min += duration) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const endMinutes = min + duration;
      let endHour = hour;
      let endMin = endMinutes;
      if (endMinutes >= 60) {
        endHour = hour + 1;
        endMin = endMinutes - 60;
      }
      const label = `${startHour}:${min < 10 ? "0" + min : min} - ${
        endHour % 12 === 0 ? 12 : endHour % 12
      }:${endMin < 10 ? "0" + endMin : endMin}`;
      const value = `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}`;
      slots.push({ label, value });
    }
  }
  return slots;
}

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");
    const duration = parseInt(searchParams.get("duration"), 10) || 30;

    if (!date) {
      return NextResponse.json({ slots: [], booked: [], error: "Missing date" }, { status: 400 });
    }

    const bookings = await Booking.find({ date, callType: String(duration) });
    const allSlots = generateTimeSlots(9, 18, duration);

    const now = new Date();
    const isToday = date === now.toISOString().split("T")[0];

    const currentTime = new Date();
    currentTime.setSeconds(0);
    currentTime.setMilliseconds(0);

    const availableSlots = allSlots.filter(slot => {
      const isBooked = bookings.some(b => b.time === slot.value);
      if (isBooked) return false;

      // Prevent booking for past time slots today
      if (isToday) {
        const [slotHour, slotMinute] = slot.value.split(":").map(Number);
        const slotTime = new Date();
        slotTime.setHours(slotHour, slotMinute, 0, 0);
        slotTime.setSeconds(0);
        slotTime.setMilliseconds(0);

        if (slotTime <= currentTime) return false;
      }

      return true;
    });

    const bookedSlotValues = allSlots
      .filter(slot => !availableSlots.some(av => av.value === slot.value))
      .map(slot => slot.value);

    return NextResponse.json({ slots: availableSlots, booked: bookedSlotValues });
  } catch (error) {
    console.error("Error fetching available slots:", error);
    return NextResponse.json({ slots: [], booked: [], error: "Internal server error" }, { status: 500 });
  }
}
