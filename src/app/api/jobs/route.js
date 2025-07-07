import { dbConnect } from "@/app/db";
import Job from "@/app/db/job";

export async function GET() {
  try {
    await dbConnect();
    const jobs = await Job.find().sort({ createdAt: -1 });
    return Response.json({ jobs });
  } catch (err) {
    console.error("Job fetch error:", err);
    return Response.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const job = new Job({
      title: data.title,
      category: data.category,
      type: data.type,
      timing: data.timing,
      location: data.location,
      degree: data.degree,
      experience: data.experience,
      requirements: data.requirements,
      description: data.description,
    });
    await job.save();
    return Response.json({ success: true, job });
  } catch (err) {
    console.error("Job creation error:", err);
    return Response.json({ error: "Failed to create job" }, { status: 500 });
  }
} 