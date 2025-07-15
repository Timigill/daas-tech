import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  metaDescription: String,
  date: Date,
  image: String,
  content: String,
  category: String,
  tags: String,
  seoTitle: String,
  seoKeywords: String,
  attachment: String,
  status: { type: String, default: 'published' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
