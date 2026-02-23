const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const RESTAURANT_EMAIL = "farazs156@gmail.com";

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { form_type, ...formData } = await req.json();

    let subject = "New Form Submission - Spice Villa";
    let body = "";

    if (form_type === "table_booking") {
      subject = `🍽️ New Table Booking - ${formData.name}`;
      body = `
        <h2>New Table Booking</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Email:</strong> ${formData.email || "Not provided"}</p>
        <p><strong>Date:</strong> ${formData.date}</p>
        <p><strong>Time:</strong> ${formData.time}</p>
        <p><strong>Guests:</strong> ${formData.guests}</p>
        <p><strong>Requests:</strong> ${formData.message || "None"}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">Sent from spice-villa-orders.lovable.app</p>
      `;
    } else if (form_type === "catering") {
      subject = `🎉 Catering Request - ${formData.name}`;
      body = `
        <h2>New Catering Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Email:</strong> ${formData.email || "Not provided"}</p>
        <p><strong>Date:</strong> ${formData.date}</p>
        <p><strong>Food Type:</strong> ${formData.food_type || "Not specified"}</p>
        <p><strong>Guests:</strong> ${formData.guests}</p>
        <p><strong>Message:</strong> ${formData.message || "None"}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">Sent from spice-villa-orders.lovable.app</p>
      `;
    } else if (form_type === "reservation") {
      subject = `📅 Reservation - ${formData.name}`;
      body = `
        <h2>New Reservation</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Email:</strong> ${formData.email || "Not provided"}</p>
        <p><strong>Date:</strong> ${formData.date}</p>
        <p><strong>Time:</strong> ${formData.time}</p>
        <p><strong>Guests:</strong> ${formData.guests}</p>
        <p><strong>Requests:</strong> ${formData.message || "None"}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">Sent from spice-villa-orders.lovable.app</p>
      `;
    }

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    console.log("Sending email with subject:", subject);
    console.log("Resend API key present:", !!resendKey);
    console.log("Sending to:", RESTAURANT_EMAIL);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: "Spice Villa <onboarding@resend.dev>",
        to: [RESTAURANT_EMAIL],
        subject,
        html: body,
      }),
    });

    const resBody = await res.text();
    console.log("Resend response status:", res.status);
    console.log("Resend response body:", resBody);

    if (!res.ok) {
      throw new Error(`Resend error: ${resBody}`);
    }

    return new Response(JSON.stringify({ success: true, resend: JSON.parse(resBody) }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
