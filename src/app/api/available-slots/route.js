import { dbConnect } from "@/app/db";
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

// Helper to generate slots
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
      const label = `${startHour}:${min < 10 ? "0" + min : min} - ${(endHour % 12 === 0 ? 12 : endHour % 12)}:${endMin < 10 ? "0" + endMin : endMin}`;
      const value = `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}`;
      slots.push({ label, value });
    }
  }
  return slots;
}

export async function GET(req) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");
  const duration = parseInt(searchParams.get("duration"), 10) || 30;

  console.log("API called for date:", date);

  // Only get bookings for the selected date and duration
  const bookings = await Booking.find({ date, callType: String(duration) });

  console.log("Bookings found:", bookings);

  const allSlots = generateTimeSlots(9, 18, duration);

  // Only mark as booked if the slot is booked for this date
  const availableSlots = allSlots.filter(
    slot => !bookings.some(b => b.time === slot.value)
  );

  const bookedSlotValues = date && availableSlots.length > 0
    ? allSlots.filter(slot => !availableSlots.some(av => av.value === slot.value)).map(slot => slot.value)
    : [];

  return Response.json({ slots: availableSlots });
}

export async function POST(req) {
  await dbConnect();
  const data = await req.json();

  // Check if the slot already exists
  const exists = await Booking.findOne({
    date: data.date,
    time: data.time,
    callType: data.callType,
  });
  if (exists) {
    return Response.json({ error: "Slot already booked" }, { status: 409 });
  }

  // Create a new booking
  const booking = new Booking(data);
  await booking.save();

  return Response.json({ message: "Booking successful" });
}