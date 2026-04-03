"use server";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const organization = formData.get("organization") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  try {
    const res = await fetch("https://formspree.io/f/xkopzlwq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, organization, message }),
    });

    if (!res.ok) {
      return {
        status: "error",
        message: "Something went wrong. Please try again.",
      };
    }

    return {
      status: "success",
      message: "Thanks — we'll be in touch soon.",
    };
  } catch {
    return {
      status: "error",
      message: "Network error. Please try again.",
    };
  }
}
