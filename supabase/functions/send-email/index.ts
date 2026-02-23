const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const RESTAURANT_EMAIL = "farazs156@gmail.com";

// Simple in-memory rate limiter (resets on cold start, but sufficient for basic protection)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max requests
const RATE_WINDOW_MS = 60 * 60 * 1000; // per hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Validation helpers
function validateName(v: unknown): string {
  if (typeof v !== 'string' || v.trim().length === 0 || v.length > 100) throw new Error('Invalid name');
  return v.trim();
}
function validatePhone(v: unknown): string {
  if (typeof v !== 'string' || !/^\+?[0-9\s\-()]+$/.test(v) || v.length > 20) throw new Error('Invalid phone');
  return v.trim();
}
function validateEmail(v: unknown): string | undefined {
  if (v === undefined || v === null || v === '') return undefined;
  if (typeof v !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || v.length > 255) throw new Error('Invalid email');
  return v.trim();
}
function validateDate(v: unknown): string {
  if (typeof v !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(v)) throw new Error('Invalid date');
  return v;
}
function validateTime(v: unknown): string {
  if (typeof v !== 'string' || !/^\d{2}:\d{2}$/.test(v)) throw new Error('Invalid time');
  return v;
}
function validateGuests(v: unknown): string {
  const s = String(v);
  if (!/^\d+$/.test(s) || parseInt(s) < 1 || parseInt(s) > 500) throw new Error('Invalid guests');
  return s;
}
function validateMessage(v: unknown): string {
  if (v === undefined || v === null || v === '') return '';
  if (typeof v !== 'string' || v.length > 1000) throw new Error('Invalid message');
  return v.trim();
}
function validateFormType(v: unknown): string {
  if (typeof v !== 'string' || !['table_booking', 'catering', 'reservation'].includes(v)) throw new Error('Invalid form type');
  return v;
}
function validateFoodType(v: unknown): string {
  if (v === undefined || v === null || v === '') return '';
  if (typeof v !== 'string' || v.length > 100) throw new Error('Invalid food type');
  return v.trim();
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(clientIP)) {
      return new Response(JSON.stringify({ error: 'Too many requests. Please try again later.' }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const rawData = await req.json();

    // Validate form_type
    const form_type = validateFormType(rawData.form_type);

    // Validate and sanitize all inputs
    const name = escapeHtml(validateName(rawData.name));
    const phone = escapeHtml(validatePhone(rawData.phone));
    const email = validateEmail(rawData.email);
    const message = escapeHtml(validateMessage(rawData.message));
    const date = validateDate(rawData.date);

    let subject = "New Form Submission - Spice Villa";
    let body = "";
    let customerSubject = "";
    let customerBody = "";
    const customerEmail = email;

    if (form_type === "table_booking") {
      const time = validateTime(rawData.time);
      const guests = validateGuests(rawData.guests);

      subject = `🍽️ New Table Booking - ${name}`;
      body = `
        <h2>New Table Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Requests:</strong> ${message || "None"}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">Sent from spice-villa-orders.lovable.app</p>
      `;
      customerSubject = "Bokningsbekräftelse - Spice Villa";
      customerBody = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#1a1a1a;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:#d4a843;padding:20px;text-align:center;">
            <h1 style="margin:0;color:#000;font-size:24px;">Spice Villa</h1>
            <p style="margin:4px 0 0;color:#333;font-size:14px;">Restaurang &amp; Catering</p>
          </div>
          <div style="padding:30px;">
            <h2 style="color:#d4a843;margin-top:0;">Tack för din bokning!</h2>
            <p>Hej ${name},</p>
            <p>Vi har mottagit din bordsbokning. Här är dina uppgifter:</p>
            <table style="width:100%;border-collapse:collapse;margin:20px 0;">
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Datum</td><td style="padding:8px 0;border-bottom:1px solid #333;">${date}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Tid</td><td style="padding:8px 0;border-bottom:1px solid #333;">${time}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Antal gäster</td><td style="padding:8px 0;border-bottom:1px solid #333;">${guests}</td></tr>
              ${message ? `<tr><td style="padding:8px 0;color:#999;">Önskemål</td><td style="padding:8px 0;">${message}</td></tr>` : ""}
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
      const guests = validateGuests(rawData.guests);
      const food_type = escapeHtml(validateFoodType(rawData.food_type));

      subject = `🎉 Catering Request - ${name}`;
      body = `
        <h2>New Catering Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Food Type:</strong> ${food_type || "Not specified"}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Message:</strong> ${message || "None"}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">Sent from spice-villa-orders.lovable.app</p>
      `;
      customerSubject = "Cateringförfrågan mottagen - Spice Villa";
      customerBody = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#1a1a1a;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:#d4a843;padding:20px;text-align:center;">
            <h1 style="margin:0;color:#000;font-size:24px;">Spice Villa</h1>
            <p style="margin:4px 0 0;color:#333;font-size:14px;">Restaurang &amp; Catering</p>
          </div>
          <div style="padding:30px;">
            <h2 style="color:#d4a843;margin-top:0;">Tack för din cateringförfrågan!</h2>
            <p>Hej ${name},</p>
            <p>Vi har mottagit din förfrågan och återkommer med en offert så snart som möjligt.</p>
            <table style="width:100%;border-collapse:collapse;margin:20px 0;">
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Datum</td><td style="padding:8px 0;border-bottom:1px solid #333;">${date}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Typ av mat</td><td style="padding:8px 0;border-bottom:1px solid #333;">${food_type || "Ej angiven"}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Antal gäster</td><td style="padding:8px 0;border-bottom:1px solid #333;">${guests}</td></tr>
              ${message ? `<tr><td style="padding:8px 0;color:#999;">Meddelande</td><td style="padding:8px 0;">${message}</td></tr>` : ""}
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
      const time = validateTime(rawData.time);
      const guests = validateGuests(rawData.guests);

      subject = `📅 Reservation - ${name}`;
      body = `
        <h2>New Reservation</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Requests:</strong> ${message || "None"}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">Sent from spice-villa-orders.lovable.app</p>
      `;
      customerSubject = "Bokningsbekräftelse - Spice Villa";
      customerBody = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#1a1a1a;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:#d4a843;padding:20px;text-align:center;">
            <h1 style="margin:0;color:#000;font-size:24px;">Spice Villa</h1>
            <p style="margin:4px 0 0;color:#333;font-size:14px;">Restaurang &amp; Catering</p>
          </div>
          <div style="padding:30px;">
            <h2 style="color:#d4a843;margin-top:0;">Tack för din reservation!</h2>
            <p>Hej ${name},</p>
            <p>Vi har mottagit din reservation. Här är dina uppgifter:</p>
            <table style="width:100%;border-collapse:collapse;margin:20px 0;">
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Datum</td><td style="padding:8px 0;border-bottom:1px solid #333;">${date}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Tid</td><td style="padding:8px 0;border-bottom:1px solid #333;">${time}</td></tr>
              <tr><td style="padding:8px 0;color:#999;border-bottom:1px solid #333;">Antal gäster</td><td style="padding:8px 0;border-bottom:1px solid #333;">${guests}</td></tr>
              ${message ? `<tr><td style="padding:8px 0;color:#999;">Önskemål</td><td style="padding:8px 0;">${message}</td></tr>` : ""}
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
      console.error("RESEND_API_KEY not configured");
      throw new Error("Email service unavailable");
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
      console.error("Resend API error:", resBody);
      throw new Error("Failed to send email");
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
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: "Failed to send your request. Please try again or contact us directly." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
