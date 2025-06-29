import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminLayout({ children }) {
  const cookieStore = cookies();
  const token = cookieStore.get("adminToken");

  if (!token) {
    redirect("/admin/login");
  }

  return <>

  {children}</>;
} 