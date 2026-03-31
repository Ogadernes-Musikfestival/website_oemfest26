"use server";
import { z } from "zod";

export async function signupFrivillig(prevState: any, formData: FormData) {
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
    const firstError = Object.values(parsed.error.flatten().fieldErrors)
      .flat()
      .find(Boolean);

    return {
      success: false,
      message: firstError || "Ugyldige data",
    };
  }

  try {
    const res = await fetch(
      "https://frivillige.vercel.app/api/external-signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.EXTERNAL_SIGNUP_API_KEY}`,
        },
        body: JSON.stringify(parsed.data),
      },
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.error || "Der skete en fejl ved tilmelding",
      };
    }

    return {
      success: true,
      message:
        result.message ||
        "Tak! Din tilmelding er modtaget. Du vil modtage yderligere info om dagen på email.",
    };
  } catch (err) {
    return {
      success: false,
      message: "Netværksfejl – prøv igen senere",
    };
  }
}
