import { NextResponse } from "next/server";
import Subscriber from "@/app/db/subscribe";
import { dbConnect } from "@/app/db";


export async function POST(req) {
  try {
    await  dbConnect(); // connect once and reuse

    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const newSubscriber = await Subscriber.create({ email });

    return NextResponse.json(
      { message: "Subscribed successfully!", subscriber: newSubscriber },
      { status: 201 }
    );
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({ error: "Email already subscribed" }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
