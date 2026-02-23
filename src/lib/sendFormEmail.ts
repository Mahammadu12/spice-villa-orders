import { supabase } from "@/integrations/supabase/client";

/**
 * Send form data to the restaurant's email via the send-email edge function.
 */
export async function sendFormEmail(data: Record<string, string>) {
  const { data: result, error } = await supabase.functions.invoke("send-email", {
    body: data,
  });

  if (error) throw error;
  return result;
}
