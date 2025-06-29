import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    projectName: { type: String },
    company: { type: String },
    projectType: { type: String, required: true },
    timeline: { type: String, required: true },
    budget: { type: String, required: true },
    contactName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    contactMethod: { type: [String], default: [] },
    description: { type: String, required: true },
   
    fileName: { type: String },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ["pending", "reviewed", "contacted", "completed"], default: "pending" }
});

export default mongoose.models.Quote || mongoose.model("Quote", quoteSchema); 