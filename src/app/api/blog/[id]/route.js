import { dbConnect } from "@/app/db";
import Blog from "@/app/db/blog";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET(req, { params }) {
  await dbConnect();

  try {
    const { id } = await params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json({ message: "Error fetching blog" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await dbConnect();

  const token = cookies().get("adminToken")?.value;
  if (!token) {
    return NextResponse.json({ message: "Unauthorized: No token" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return NextResponse.json({ message: "Forbidden: Not an admin" }, { status: 403 });
    }

    const { id } = await params;
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
  }
}

export async function PUT(req, { params }) {
  await dbConnect();

  const token = cookies().get("adminToken")?.value;
  if (!token) {
    return NextResponse.json({ message: "Unauthorized: No token" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return NextResponse.json({ message: "Forbidden: Not an admin" }, { status: 403 });
    }

    const body = await req.json();
    const { id } = await params;
    const updated = await Blog.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
  }
}