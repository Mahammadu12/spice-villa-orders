const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const RESTAURANT_EMAIL = "info@spice-villa.se";

// Simple in-memory rate limiter (resets on cold start, but sufficient for basic protection)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

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
function validateEventType(v: unknown): string {
  if (v === undefined || v === null || v === '') return '';
  if (typeof v !== 'string' || v.length > 100) throw new Error('Invalid event type');
  return v.trim();
}

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

// ─── Shared email wrapper ───────────────────────────────────────────────
function wrapEmail(content: string, isRestaurant = false): string {
  return `
<!DOCTYPE html>
<html lang="sv">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#e0e0e0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f0f;padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1a1a1a;border-radius:16px;overflow:hidden;border:1px solid #2a2a2a;">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#d4a843 0%,#b8912e 100%);padding:32px 40px;text-align:center;">
    <h1 style="margin:0;font-size:28px;font-weight:700;color:#000;letter-spacing:2px;">SPICE VILLA</h1>
    <p style="margin:6px 0 0;font-size:13px;color:#333;letter-spacing:3px;text-transform:uppercase;">Restaurang &amp; Catering — Spånga</p>
  </td></tr>

  <!-- Body -->
  <tr><td style="padding:36px 40px 24px;">
    ${content}
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:0 40px 8px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="border-top:1px solid #2a2a2a;padding-top:24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="vertical-align:top;padding-right:20px;">
          <p style="margin:0 0 4px;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Kontakt</p>
          <p style="margin:0;font-size:13px;color:#bbb;">📞 <a href="tel:+46764222770" style="color:#d4a843;text-decoration:none;">076-422 27 70</a></p>
          <p style="margin:4px 0 0;font-size:13px;color:#bbb;">📍 Tenstagången 25, 163 64 Spånga</p>
        </td>
        <td style="vertical-align:top;text-align:right;">
          <p style="margin:0 0 4px;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Öppettider</p>
          <p style="margin:0;font-size:13px;color:#bbb;">Mån–Fre 11:00–22:00</p>
          <p style="margin:4px 0 0;font-size:13px;color:#bbb;">Lör–Sön 12:00–22:00</p>
        </td>
      </tr>
      </table>
    </td></tr>
    </table>
  </td></tr>

  <tr><td style="padding:16px 40px 24px;text-align:center;">
    <p style="margin:0;font-size:11px;color:#555;">© ${new Date().getFullYear()} Spice Villa Spånga — Autentisk pakistansk mat</p>
    ${!isRestaurant ? '<p style="margin:6px 0 0;font-size:11px;color:#444;">Detta är ett automatiskt meddelande. Svara inte direkt på detta mail.</p>' : ''}
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

// ─── Detail row helper ──────────────────────────────────────────────────
function detailRow(label: string, value: string, isLast = false): string {
  const border = isLast ? '' : 'border-bottom:1px solid #2a2a2a;';
  return `<tr>
    <td style="padding:12px 16px;${border}font-size:13px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;width:140px;">${label}</td>
    <td style="padding:12px 16px;${border}font-size:14px;color:#f0f0f0;">${value}</td>
  </tr>`;
}

function detailsTable(rows: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#111;border-radius:10px;overflow:hidden;margin:20px 0 24px;">${rows}</table>`;
}

// ─── Restaurant email builders ──────────────────────────────────────────
function restaurantBookingEmail(name: string, phone: string, email: string | undefined, date: string, time: string, guests: string, message: string): string {
  const badge = `<span style="display:inline-block;background:#d4a843;color:#000;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;letter-spacing:1px;">Ny Bokning</span>`;
  const rows = detailRow('Namn', name)
    + detailRow('Telefon', `<a href="tel:${phone}" style="color:#d4a843;text-decoration:none;">${phone}</a>`)
    + detailRow('E-post', email ? `<a href="mailto:${email}" style="color:#d4a843;text-decoration:none;">${email}</a>` : '<span style="color:#666;">Ej angiven</span>')
    + detailRow('Datum', formatDate(date))
    + detailRow('Tid', time)
    + detailRow('Gäster', `${guests} personer`)
    + detailRow('Önskemål', message || '<span style="color:#666;">Inga</span>', true);

  return `
    ${badge}
    <h2 style="margin:16px 0 6px;font-size:22px;color:#f0f0f0;font-weight:600;">Bordbokning från ${name}</h2>
    <p style="margin:0 0 20px;font-size:14px;color:#888;">Mottagen ${new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })}</p>
    ${detailsTable(rows)}
    <p style="margin:0;font-size:13px;color:#888;">⚡ Bekräfta bokningen genom att ringa eller maila kunden.</p>
  `;
}

function restaurantCateringEmail(name: string, phone: string, email: string | undefined, date: string, foodType: string, eventType: string, guests: string, message: string): string {
  const badge = `<span style="display:inline-block;background:#e8913a;color:#000;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;letter-spacing:1px;">Catering</span>`;
  const rows = detailRow('Namn', name)
    + detailRow('Telefon', `<a href="tel:${phone}" style="color:#d4a843;text-decoration:none;">${phone}</a>`)
    + detailRow('E-post', email ? `<a href="mailto:${email}" style="color:#d4a843;text-decoration:none;">${email}</a>` : '<span style="color:#666;">Ej angiven</span>')
    + detailRow('Datum', formatDate(date))
    + detailRow('Mattyp', foodType || '<span style="color:#666;">Ej angiven</span>')
    + detailRow('Eventtyp', eventType || '<span style="color:#666;">Ej angiven</span>')
    + detailRow('Gäster', `${guests} personer`)
    + detailRow('Meddelande', message || '<span style="color:#666;">Inget</span>', true);

  return `
    ${badge}
    <h2 style="margin:16px 0 6px;font-size:22px;color:#f0f0f0;font-weight:600;">Cateringförfrågan från ${name}</h2>
    <p style="margin:0 0 20px;font-size:14px;color:#888;">Mottagen ${new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })}</p>
    ${detailsTable(rows)}
    <p style="margin:0;font-size:13px;color:#888;">⚡ Kontakta kunden för att diskutera detaljer och skicka offert.</p>
  `;
}

// ─── Customer email builders ────────────────────────────────────────────
function customerBookingEmail(name: string, date: string, time: string, guests: string, message: string): string {
  const rows = detailRow('Datum', formatDate(date))
    + detailRow('Tid', time)
    + detailRow('Antal gäster', `${guests} personer`)
    + (message ? detailRow('Önskemål', message, true) : '');

  return `
    <h2 style="margin:0 0 8px;font-size:22px;color:#d4a843;font-weight:600;">Tack för din bokning, ${name}!</h2>
    <p style="margin:0 0 4px;font-size:15px;color:#ccc;">Vi har mottagit din bordsbokning och återkommer med bekräftelse inom kort.</p>

    <div style="margin:24px 0;padding:16px 20px;background:rgba(212,168,67,0.08);border-left:3px solid #d4a843;border-radius:6px;">
      <p style="margin:0;font-size:14px;color:#d4a843;font-weight:600;">📋 Dina bokningsuppgifter</p>
    </div>

    ${detailsTable(rows)}

    <div style="background:#111;border-radius:10px;padding:20px;margin:0 0 16px;text-align:center;">
      <p style="margin:0 0 6px;font-size:14px;color:#ccc;">Behöver du ändra bokningen?</p>
      <p style="margin:0;font-size:15px;">Ring oss på <a href="tel:+46764222770" style="color:#d4a843;font-weight:600;text-decoration:none;">076-422 27 70</a></p>
    </div>

    <p style="margin:16px 0 0;font-size:13px;color:#888;text-align:center;">Vi ser fram emot ditt besök! 🌶️</p>
  `;
}

function customerCateringEmail(name: string, date: string, foodType: string, eventType: string, guests: string, message: string): string {
  const rows = detailRow('Datum', formatDate(date))
    + detailRow('Mattyp', foodType || 'Ej angiven')
    + detailRow('Eventtyp', eventType || 'Ej angiven')
    + detailRow('Antal gäster', `${guests} personer`)
    + (message ? detailRow('Meddelande', message, true) : '');

  return `
    <h2 style="margin:0 0 8px;font-size:22px;color:#d4a843;font-weight:600;">Tack för din cateringförfrågan, ${name}!</h2>
    <p style="margin:0 0 4px;font-size:15px;color:#ccc;">Vi har mottagit din förfrågan och kontaktar dig inom kort med en offert.</p>

    <div style="margin:24px 0;padding:16px 20px;background:rgba(212,168,67,0.08);border-left:3px solid #d4a843;border-radius:6px;">
      <p style="margin:0;font-size:14px;color:#d4a843;font-weight:600;">📋 Din cateringförfrågan</p>
    </div>

    ${detailsTable(rows)}

    <div style="background:#111;border-radius:10px;padding:20px;margin:0 0 16px;">
      <h3 style="margin:0 0 10px;font-size:15px;color:#f0f0f0;">Vad händer nu?</h3>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding:6px 0;font-size:13px;color:#bbb;"><span style="color:#d4a843;font-weight:700;">1.</span> Vi granskar din förfrågan</td></tr>
        <tr><td style="padding:6px 0;font-size:13px;color:#bbb;"><span style="color:#d4a843;font-weight:700;">2.</span> Vi kontaktar dig för att diskutera detaljer</td></tr>
        <tr><td style="padding:6px 0;font-size:13px;color:#bbb;"><span style="color:#d4a843;font-weight:700;">3.</span> Du får en skräddarsydd offert</td></tr>
      </table>
    </div>

    <div style="text-align:center;margin:16px 0 0;">
      <p style="margin:0 0 6px;font-size:14px;color:#ccc;">Frågor? Ring oss gärna!</p>
      <p style="margin:0;font-size:15px;"><a href="tel:+46764222770" style="color:#d4a843;font-weight:600;text-decoration:none;">076-422 27 70</a></p>
    </div>
  `;
}

// ─── Main handler ───────────────────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(clientIP)) {
      return new Response(JSON.stringify({ error: 'Too many requests. Please try again later.' }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const rawData = await req.json();
    const form_type = validateFormType(rawData.form_type);

    const name = escapeHtml(validateName(rawData.name));
    const phone = escapeHtml(validatePhone(rawData.phone));
    const email = validateEmail(rawData.email);
    const message = escapeHtml(validateMessage(rawData.message));
    const date = validateDate(rawData.date);

    let subject = "";
    let body = "";
    let customerSubject = "";
    let customerBody = "";
    const customerEmail = email;

    if (form_type === "table_booking" || form_type === "reservation") {
      const time = validateTime(rawData.time);
      const guests = validateGuests(rawData.guests);

      subject = `🍽️ Ny Bordsbokning — ${name} | ${formatDate(date)} kl ${time}`;
      body = wrapEmail(restaurantBookingEmail(name, phone, email, date, time, guests, message), true);

      customerSubject = `✅ Bokningsbekräftelse — Spice Villa | ${formatDate(date)}`;
      customerBody = wrapEmail(customerBookingEmail(name, date, time, guests, message));

    } else if (form_type === "catering") {
      const guests = validateGuests(rawData.guests);
      const food_type = escapeHtml(validateFoodType(rawData.food_type));
      const event_type = escapeHtml(validateEventType(rawData.event_type));

      subject = `🎉 Cateringförfrågan — ${name} | ${guests} gäster`;
      body = wrapEmail(restaurantCateringEmail(name, phone, email, date, food_type, event_type, guests, message), true);

      customerSubject = `✅ Cateringförfrågan mottagen — Spice Villa`;
      customerBody = wrapEmail(customerCateringEmail(name, date, food_type, event_type, guests, message));
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
