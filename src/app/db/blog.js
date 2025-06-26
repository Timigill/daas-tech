import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  metaDescription: String,
  date: Date,
  image: String,
  content: String,
  category: String,
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
