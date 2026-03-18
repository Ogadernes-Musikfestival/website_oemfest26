"use server";
import { z } from "zod";

export async function signupFrivillig(formData: FormData) {
  const signupSchema = z.object({
    navn: z.string().min(2, "Navn skal være mindst 2 karakterer"),
    email: z.string().email("Ugyldig email"),
    telefon: z.string().optional(),
    omraade: z.string().optional(),
    kommentar: z.string().optional(),
    slotId: z.string().optional(),
  });
  const data = {
    navn: String(formData.get("navn") || ""),
    email: String(formData.get("email") || ""),
    telefon: formData.get("telefon")
      ? String(formData.get("telefon"))
      : undefined,
    omraade: formData.get("omraade")
      ? String(formData.get("omraade"))
      : undefined,
    kommentar: formData.get("kommentar")
      ? String(formData.get("kommentar"))
      : undefined,
    slotId: formData.get("slotId") ? String(formData.get("slotId")) : undefined,
  };

  // 1️⃣ Validate the form data
  const parsed = signupSchema.safeParse(data);

  if (!parsed.success) {
    // Pick the first error message to show
    const firstError = Object.values(parsed.error.flatten().fieldErrors)
      .flat()
      .find(Boolean);
    throw new Error(firstError || "Ugyldige data");
  }

  // 2️⃣ Send validated data to the external API
  const res = await fetch("http://localhost:3001/api/external-signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.EXTERNAL_SIGNUP_API_KEY}`,
    },
    body: JSON.stringify(parsed.data),
  });

  if (!res.ok) {
    throw new Error("Der skete en fejl ved tilmelding");
  }

  // 3️⃣ Return a success message for the UI
  return "Tilmelding lykkedes!";
}
