import BlogDetailClient from "./BlogDetailsClient";

async function getBlog(id) {
  const res = await fetch(`/api/blog/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const blog = await getBlog(params.id);
  return <BlogDetailClient blog={blog} />;
}
