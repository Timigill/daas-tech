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
  status: { type: String, enum: ['pending', 'approved', 'declined'], default: 'pending', required: true },
  declineReason: String, // optional, for notes on decline
  currentStatus: { type: String, enum: ['pending', 'scheduled', 'conducted', 'missed', 'rescheduled'], default: 'pending' },
  result: String, // outcome or notes after meeting
  resultReason: String, // reason for result (e.g., why missed/rescheduled)
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  decisionAt: Date // when approved/declined
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
  await Booking.create({
    ...data,
    status: 'pending',
    currentStatus: 'pending'
  });

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
      <div style="max-width:480px;margin:0 auto;background:#181622;border-radius:18px;overflow:hidden;font-family:Inter,sans-serif;border:1px solid #23232a;box-shadow:0 4px 32px rgba(0,0,0,0.18);">
        <div style="background:#181622;padding:24px 0 0 0;text-align:center;">
          </div>
        <div style="padding:32px 24px 24px 24px;text-align:center;">
          <div style="font-size:26px;font-weight:700;color:#fff;line-height:1.2;margin-bottom:8px;">
            YOUR MEETING IS BOOKED
          </div>
          <div style="font-size:16px;font-weight:500;color:#8b5cf6;margin-bottom:8px;">
            Where Problems Meet Possibilities
          </div>
          <div style="font-size:15px;color:#eee;margin-bottom:24px;">
            You've received this message because you booked a meeting with DaaS Tech.<br/>
            Here are your meeting details:
          </div>
          <div style="margin-bottom:24px;color:#fff;">
            <b>Date:</b> ${data.date}<br/>
            <b>Time:</b> ${data.time}<br/>
            <b>Duration:</b> ${data.callType} min<br/>
            <b>Purpose:</b> ${data.purpose}
          </div>
          <a href="https://daastech.info/" style="display:inline-block;background:#8b5cf6;color:#fff;font-weight:700;padding:12px 32px;border-radius:8px;text-decoration:none;font-size:16px;margin-bottom:16px;">
            Visit Site
          </a>
          <div style="font-size:12px;color:#bdbdbd;margin-top:16px;">
            If you didn't book this meeting, you can ignore this email.
          </div>
        </div>
        <div style="background:#1e1b2e;padding:16px 0;text-align:center;border-top:1px solid #23232a;">
          <a href="https://daastech.info/" style="color:#8b5cf6;text-decoration:none;font-size:14px;margin:0 12px;">Visit Site</a>
          <span style="color:#444;">|</span>
          <a href="https://daastech.info/contact" style="color:#8b5cf6;text-decoration:none;font-size:14px;margin:0 12px;">Contact Us</a>
          <span style="color:#444;">|</span>
          <a href="https://daastech.info/careers" style="color:#8b5cf6;text-decoration:none;font-size:14px;margin:0 12px;">Join Us</a>
        </div>
      </div>
    `,
    text: `Thank you for booking a call!\nDate: ${data.date}\nTime: ${data.time}\nDuration: ${data.callType} min\nPurpose: ${data.purpose}\nWe look forward to speaking with you.`,
  });

  return Response.json({ success: true });
}