import { NextResponse } from "next/server";
import { site } from "@/lib/site-data";

const maxUploadBytes = 6 * 1024 * 1024;

export async function POST(request: Request) {
  const formData = await request.formData();

  if (String(formData.get("company") || "").trim()) {
    return NextResponse.json({ message: "Thank you for contacting Casa Arcobaleno." });
  }

  const requiredFields = ["name", "email", "projectSize"];
  const missing = requiredFields.filter((field) => !String(formData.get(field) || "").trim());

  if (missing.length > 0) {
    return NextResponse.json({ message: "Please complete the required fields." }, { status: 400 });
  }

  const email = String(formData.get("email"));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const serviceSelections = formData.getAll("serviceSelections").map(String).filter(Boolean);
  if (serviceSelections.length === 0) {
    return NextResponse.json({ message: "Please select at least one service." }, { status: 400 });
  }

  const photos = formData.getAll("photos").filter((item): item is File => item instanceof File && item.size > 0);
  const totalUploadBytes = photos.reduce((sum, file) => sum + file.size, 0);

  if (totalUploadBytes > maxUploadBytes) {
    return NextResponse.json({ message: "Please upload photos totaling less than 6 MB." }, { status: 400 });
  }

  const description = String(formData.get("description") || "Not provided");
  const lines = [
    `Name: ${formData.get("name")}`,
    `Email: ${email}`,
    `Optional phone: ${formData.get("optionalPhone") || "Not provided"}`,
    `Preferred contact method: ${formData.get("preferredContact") || "Not provided"}`,
    `Service needed: ${formData.get("serviceNeeded") || "Not provided"}`,
    `Selected services: ${serviceSelections.length ? serviceSelections.join(", ") : "None selected"}`,
    `Project location: ${formData.get("projectLocation") || "Not provided"}`,
    `Desired date: ${formData.get("desiredDate") || "Not provided"}`,
    `Estimated project size: ${formData.get("projectSize")}`,
    `How they heard about Casa Arcobaleno: ${formData.get("referralSource") || "Not provided"}`,
    "",
    "Project description:",
    description
  ];

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL || "Casa Arcobaleno <onboarding@resend.dev>";
  const to = process.env.INQUIRY_TO_EMAIL || site.email;

  if (!apiKey) {
    return NextResponse.json({ message: "Inquiry email is not connected yet. Please try again soon." }, { status: 503 });
  }

  const attachments = await Promise.all(
    photos.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()).toString("base64")
    }))
  );

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Casa Arcobaleno inquiry from ${formData.get("name")}`,
      text: lines.join("\n"),
      attachments
    })
  });

  if (!response.ok) {
    return NextResponse.json({ message: "We could not send the inquiry. Please try again or email Casa Arcobaleno directly." }, { status: 502 });
  }

  return NextResponse.json({ message: "Thank you for contacting Casa Arcobaleno. We have received your inquiry and will be in touch soon." });
}
