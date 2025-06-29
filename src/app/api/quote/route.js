import { dbConnect } from "@/app/db";
import Quote from "@/app/db/quote";

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();

    // Create a new quote with all fields
    const quote = new Quote({
      contactName: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      projectType: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      description: data.description,
      // Additional fields from the form
      projectName: data.projectName,
      contactMethod: data.contactMethod,
      fileName: data.fileName,
      createdAt: new Date(),
      status: "pending"
    });
    
    await quote.save();

    return Response.json({ 
      success: true, 
      message: "Quote submitted successfully",
      quoteId: quote._id 
    });
  } catch (err) {
    console.error("Quote submission error:", err);
    return Response.json(
      { error: "Failed to submit quote" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await dbConnect();
    const quotes = await Quote.find().sort({ createdAt: -1 });
    return Response.json({ quotes });
  } catch (err) {
    console.error("Quote fetch error:", err);
    return Response.json(
      { error: "Failed to fetch quotes" },
      { status: 500 }
    );
  }
} 