import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  experience: { type: String, required: true },
  resume: { type: String }, // file path or URL
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.JobApplication || mongoose.model("JobApplication", jobApplicationSchema); 