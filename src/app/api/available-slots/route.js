import { dbConnect } from "@/app/db";
import mongoose from "mongoose";

// Booking model
const BookingSchema = new mongoose.Schema({
  date: String,
  time: String,
  callType: String,
});
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

  // Only get bookings for the selected date and duration
  const bookings = await Booking.find({ date, callType: String(duration) });

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