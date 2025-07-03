import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  timing: { type: String, required: true },
  location: { type: String, required: true },
  degree: { type: String, required: true },
  experience: { type: String, required: true },
  requirements: { type: [String], default: [] },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Job || mongoose.model("Job", jobSchema); 