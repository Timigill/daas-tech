import BlogDetailClient from "./BlogDetailsClient";

async function getBlog(id) {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/blog/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.id);
  return <BlogDetailClient blog={blog} />;
}
