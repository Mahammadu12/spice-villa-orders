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
    let customerSubject = "";
    let customerBody = "";
    const customerEmail = formData.email;

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
      customerSubject = "Bokningsbekräftelse - Spice Villa";
      customerBody = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#1a1a1a;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:#d4a843;padding:20px;text-align:center;">
            <h1 style="margin:0;color:#000;font-size:24px;">Spice Villa</h1>
            <p style="margin:4px 0 0;color:#333;font-size:14px;">Restaurang & Catering</p>
          </div>
          <div style="padding:30px;">
            <h2 style="color:#d4a843;margin-top:0;">Tack för din bokning!</h2>
            <p>Hej ${formData.name},</p>
            <p>Vi har mottagit din bordsbokning. Här är dina uppgifter:</p>
            <table style="width:100%;border-collapse:collapse;margin:20px 0;">
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Datum</td><td style="padding:8px 0;border-bottom:1px solid #333;">${formData.date}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Tid</td><td style="padding:8px 0;border-bottom:1px solid #333;">${formData.time}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Antal gäster</td><td style="padding:8px 0;border-bottom:1px solid #333;">${formData.guests}</td></tr>
              ${formData.message ? `<tr><td style="padding:8px 0;color:#999;">Önskemål</td><td style="padding:8px 0;">${formData.message}</td></tr>` : ""}
            </table>
            <p>Vi återkommer med en bekräftelse inom kort. Vid frågor, ring oss gärna.</p>
            <p style="margin-top:20px;">📞 <a href="tel:+46764222770" style="color:#d4a843;">+46 76-422 27 70</a></p>
            <p>📍 Tenstagången 25, 163 64 Spånga</p>
          </div>
          <div style="background:#111;padding:15px;text-align:center;font-size:12px;color:#666;">
            © Spice Villa Spånga — Autentisk pakistansk mat
          </div>
        </div>
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
      customerSubject = "Cateringförfrågan mottagen - Spice Villa";
      customerBody = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#1a1a1a;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:#d4a843;padding:20px;text-align:center;">
            <h1 style="margin:0;color:#000;font-size:24px;">Spice Villa</h1>
            <p style="margin:4px 0 0;color:#333;font-size:14px;">Restaurang & Catering</p>
          </div>
          <div style="padding:30px;">
            <h2 style="color:#d4a843;margin-top:0;">Tack för din cateringförfrågan!</h2>
            <p>Hej ${formData.name},</p>
            <p>Vi har mottagit din förfrågan och återkommer med en offert så snart som möjligt.</p>
            <table style="width:100%;border-collapse:collapse;margin:20px 0;">
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Datum</td><td style="padding:8px 0;border-bottom:1px solid #333;">${formData.date}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Typ av mat</td><td style="padding:8px 0;border-bottom:1px solid #333;">${formData.food_type || "Ej angiven"}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Antal gäster</td><td style="padding:8px 0;border-bottom:1px solid #333;">${formData.guests}</td></tr>
              ${formData.message ? `<tr><td style="padding:8px 0;color:#999;">Meddelande</td><td style="padding:8px 0;">${formData.message}</td></tr>` : ""}
            </table>
            <p>Vi kontaktar dig inom kort för att diskutera ditt event.</p>
            <p style="margin-top:20px;">📞 <a href="tel:+46764222770" style="color:#d4a843;">+46 76-422 27 70</a></p>
            <p>📍 Tenstagången 25, 163 64 Spånga</p>
          </div>
          <div style="background:#111;padding:15px;text-align:center;font-size:12px;color:#666;">
            © Spice Villa Spånga — Autentisk pakistansk mat
          </div>
        </div>
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
      customerSubject = "Bokningsbekräftelse - Spice Villa";
      customerBody = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#1a1a1a;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:#d4a843;padding:20px;text-align:center;">
            <h1 style="margin:0;color:#000;font-size:24px;">Spice Villa</h1>
            <p style="margin:4px 0 0;color:#333;font-size:14px;">Restaurang & Catering</p>
          </div>
          <div style="padding:30px;">
            <h2 style="color:#d4a843;margin-top:0;">Tack för din reservation!</h2>
            <p>Hej ${formData.name},</p>
            <p>Vi har mottagit din reservation. Här är dina uppgifter:</p>
            <table style="width:100%;border-collapse:collapse;margin:20px 0;">
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Datum</td><td style="padding:8px 0;border-bottom:1px solid #333;">${formData.date}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Tid</td><td style="padding:8px 0;border-bottom:1px solid #333;">${formData.time}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Antal gäster</td><td style="padding:8px 0;border-bottom:1px solid #333;">${formData.guests}</td></tr>
              ${formData.message ? `<tr><td style="padding:8px 0;color:#999;">Önskemål</td><td style="padding:8px 0;">${formData.message}</td></tr>` : ""}
            </table>
            <p>Vi återkommer med en bekräftelse inom kort.</p>
            <p style="margin-top:20px;">📞 <a href="tel:+46764222770" style="color:#d4a843;">+46 76-422 27 70</a></p>
            <p>📍 Tenstagången 25, 163 64 Spånga</p>
          </div>
          <div style="background:#111;padding:15px;text-align:center;font-size:12px;color:#666;">
            © Spice Villa Spånga — Autentisk pakistansk mat
          </div>
        </div>
      `;
    }

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    // Send email to restaurant
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
    console.log("Restaurant email response:", res.status, resBody);

    if (!res.ok) {
      throw new Error(`Resend error: ${resBody}`);
    }

    // Send confirmation email to customer
    if (customerEmail && customerSubject) {
      const custRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Spice Villa <onboarding@resend.dev>",
          to: [customerEmail],
          subject: customerSubject,
          html: customerBody,
        }),
      });
      const custBody = await custRes.text();
      console.log("Customer confirmation email response:", custRes.status, custBody);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});