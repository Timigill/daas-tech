import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Contact from "../../db/Contact"; 

const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB() {
  if (mongoose.connections[0].readyState === 0) {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

// Helper validation functions
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone) => /^\d{10,15}$/.test(phone.replace(/\D/g, ""));


export const POST = async (req) => {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    await connectDB();

    // Validations
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    if (phone && !isValidPhone(phone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    await newContact.save();

    return NextResponse.json({ message: "Contact saved successfully." }, { status: 200 });
  } catch (err) {
    console.error("POST /api/contact error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};
