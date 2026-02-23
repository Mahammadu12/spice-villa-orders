/**
 * Send form data to a Zapier webhook URL.
 * Uses no-cors mode since Zapier webhooks don't return CORS headers.
 */
export async function sendToZapier(webhookUrl: string, data: Record<string, string>) {
  if (!webhookUrl) {
    throw new Error("Webhook URL is required");
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "no-cors",
    body: JSON.stringify({
      ...data,
      timestamp: new Date().toISOString(),
      source: window.location.origin,
    }),
  });
}
