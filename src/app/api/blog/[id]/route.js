import { dbConnect } from "@/app/db";
import Blog from "@/app/db/blog";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req, { params }) {
  await dbConnect();

  try {
    const blog = await Blog.findById(params.id);
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

  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ message: "Unauthorized: No token" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return NextResponse.json({ message: "Forbidden: Not an admin" }, { status: 403 });
    }

    await Blog.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
  }
}

export async function PUT(req, { params }) {
  await dbConnect();

  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ message: "Unauthorized: No token" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return NextResponse.json({ message: "Forbidden: Not an admin" }, { status: 403 });
    }

    const body = await req.json();
    const updated = await Blog.findByIdAndUpdate(params.id, body, { new: true });
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
  }
}