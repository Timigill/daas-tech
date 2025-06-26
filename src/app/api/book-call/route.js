import { dbConnect } from "@/app/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

// Booking model
const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  purpose: String,
  date: String,
  time: String,
  callType: String,
});
const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export async function POST(req) {
  await dbConnect();
  const data = await req.json();

  // Check if slot is already booked
  const exists = await Booking.findOne({
    date: data.date,
    time: data.time,
    callType: data.callType,
  });
  if (exists) {
    return Response.json({ error: "Slot already booked" }, { status: 409 });
  }

  // Save booking
  await Booking.create(data);

  // Send confirmation email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g. "smtp.gmail.com"
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your password or app password
    },
  });

  await transporter.sendMail({
    from: `"DaaS Tech" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: "Your Call is Booked!",
    html: `
      <h2>Thank you for booking a call!</h2>
      <p><b>Date:</b> ${data.date}</p>
      <p><b>Time:</b> ${data.time}</p>
      <p><b>Duration:</b> ${data.callType} min</p>
      <p><b>Purpose:</b> ${data.purpose}</p>
      <br>
      <p>We look forward to speaking with you.</p>
    `,
  });

  return Response.json({ success: true });
}