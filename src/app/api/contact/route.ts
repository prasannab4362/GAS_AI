import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.warn("Web3Forms access key is not configured in environment variables. Simulating success.");
      return NextResponse.json({ success: true, message: "Simulated success (keys missing)" });
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        phone: phone || "Not provided",
        company: company || "Not provided",
        message: message,
        subject: `New Lead from ${name} - GAS AI Website`,
        from_name: "GAS AI Automation Website",
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Web3Forms Error:", data);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
