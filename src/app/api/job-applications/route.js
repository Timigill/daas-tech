import { dbConnect } from "@/app/db";
import JobApplication from "@/app/db/jobApplication";
import Job from "@/app/db/job";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    await dbConnect();
    const applications = await JobApplication.find().populate('job', 'title');
    return Response.json({ applications });
  } catch (err) {
    console.error("Job application fetch error:", err);
    return Response.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const form = await req.formData();
    const job = form.get("job");
    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");
    const experience = form.get("experience");
    const file = form.get("resume");
    let resumePath = "";

    if (file && typeof file === "object" && file.name) {
      const uploadsDir = path.join(process.cwd(), "public", "uploads", "resumes");
      await mkdir(uploadsDir, { recursive: true });
      const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const filePath = path.join(uploadsDir, fileName);
      const arrayBuffer = await file.arrayBuffer();
      await writeFile(filePath, Buffer.from(arrayBuffer));
      resumePath = `/uploads/resumes/${fileName}`;
    }

    const application = new JobApplication({
      job,
      name,
      email,
      phone,
      experience,
      resume: resumePath,
    });
    await application.save();
    return Response.json({ success: true, application });
  } catch (err) {
    console.error("Job application submit error:", err);
    return Response.json({ error: "Failed to submit application" }, { status: 500 });
  }
} 