import { dbConnect } from "@/app/db";
import User from "@/app/db/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    if (!process.env.JWT_SECRET) {
      return new Response(
        JSON.stringify({ message: "JWT_SECRET not set in environment" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Login attempt:", email);

    // Case-insensitive email search
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    console.log("User found:", user);

    if (!user) {
      return new Response(
        JSON.stringify({ message: "User does not exist" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    if (user.role !== "admin") {
      return new Response(
        JSON.stringify({ message: "Access denied" }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(
        JSON.stringify({ message: "Invalid credentials" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Set cookie using Next.js cookies API
    cookies().set("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return new Response(
      JSON.stringify({
        token,
        user: {
          id: user._id,
          username: user.username,
          role: user.role,
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Login API error:", err);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
