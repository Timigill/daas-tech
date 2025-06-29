import { cookies } from "next/headers";

export async function POST() {
  try {
    // Clear the admin token cookie
    cookies().set("adminToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0, // This immediately expires the cookie
    });

    return new Response(
      JSON.stringify({ message: "Logged out successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Logout error:", err);
    return new Response(
      JSON.stringify({ message: "Logout failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
} 