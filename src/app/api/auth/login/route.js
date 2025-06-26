import { dbConnect } from "@/app/db";
import User from "@/app/db/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json();

  console.log("Login attempt:", email);

  // Case-insensitive email search
  const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });
  console.log("User found:", user);

  if (!user) {
    return new Response(JSON.stringify({ message: "User does not exist" }), { status: 404 });
  }
  if (user.role !== "admin") {
    return new Response(JSON.stringify({ message: "Access denied" }), { status: 403 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return Response.json({ token, user: { id: user._id, username: user.username } });
}