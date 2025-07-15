import { dbConnect } from "@/app/db";
import Blog from "@/app/db/blog";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  await dbConnect();
  const blogs = await Blog.find().sort({ date: -1 });
  return NextResponse.json(blogs);
}

export async function POST(req) {
  await dbConnect();
  // Get token from cookie
  const cookieStore = cookies();
  const token = cookieStore.get("adminToken")?.value;
  if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    const blog = await Blog.create(body);
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json({ message: "Invalid Token" }, { status: 401 });
  }
}
