import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Since we are hiding EmailJS keys, they should be in process.env
    // e.g. EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY
    
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials are not configured in environment variables. Simulating success.");
      return NextResponse.json({ success: true, message: "Simulated success (keys missing)" });
    }

    const emailJsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey, // To secure the request from backend
      template_params: {
        to_email: "sparkinnov8kjpd@gmail.com",
        from_name: name,
        from_email: email,
        phone: phone || "Not provided",
        company: company || "Not provided",
        message: message,
      },
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailJsPayload),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      console.error("EmailJS Error:", errorText);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
