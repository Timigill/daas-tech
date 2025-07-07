import { dbConnect } from "@/app/db";
import Job from "@/app/db/job";

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const job = await Job.findById(params.id);
    if (!job) return Response.json({ error: "Job not found" }, { status: 404 });
    return Response.json({ job });
  } catch (err) {
    console.error("Job fetch error:", err);
    return Response.json({ error: "Failed to fetch job" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const data = await req.json();
    const job = await Job.findByIdAndUpdate(
      params.id,
      {
        title: data.title,
        category: data.category,
        type: data.type,
        timing: data.timing,
        location: data.location,
        degree: data.degree,
        experience: data.experience,
        requirements: data.requirements,
        description: data.description,
      },
      { new: true }
    );
    if (!job) return Response.json({ error: "Job not found" }, { status: 404 });
    return Response.json({ success: true, job });
  } catch (err) {
    console.error("Job update error:", err);
    return Response.json({ error: "Failed to update job" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const job = await Job.findByIdAndDelete(params.id);
    if (!job) return Response.json({ error: "Job not found" }, { status: 404 });
    return Response.json({ success: true });
  } catch (err) {
    console.error("Job delete error:", err);
    return Response.json({ error: "Failed to delete job" }, { status: 500 });
  }
} 