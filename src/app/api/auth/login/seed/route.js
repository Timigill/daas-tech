import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/app/db/user.js"; // Make sure the path is correct

export async function POST() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const existing = await User.findOne({ email: "admin@example.com" });
    if (existing) {
      return NextResponse.json({ message: "⚠️ Admin already exists" }, { status: 200 });
    }

    const admin = new User({
      username: "AdminUser",
      email: "admin@example.com",
      password: "admin123", // Will be hashed by pre('save')
      role: "admin",
    });

    await admin.save();
    return NextResponse.json({ message: "✅ Admin created successfully" }, { status: 201 });
  } catch (error) {
    console.error("❌ MongoDB error:", error);
    return NextResponse.json(
      { error: "❌ Failed to seed admin", details: error.message },
      { status: 500 }
    );
  }
}