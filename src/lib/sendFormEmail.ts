import { supabase } from "@/integrations/supabase/client";

export async function sendFormEmail(data: Record<string, string>) {
  const { data: result, error } = await supabase.functions.invoke("send-email", {
    body: data,
  });

  if (error) throw error;
  return result;
}
