import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Lightweight visitor counter + Zapier webhook trigger (frontend-only)
// - Uses CountAPI (public, no key) to increment and fetch total visits
// - Optional Zapier webhook: owner can paste a webhook URL to receive emails per visit
//   Create a Zap with a "Catch Hook" trigger, then send email using the count payload

const STORAGE_KEY = "zapierWebhookUrl";

const VisitorCounter: React.FC = () => {
  const { toast } = useToast();
  const [count, setCount] = useState<number | null>(null);
  const [webhookUrl, setWebhookUrl] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [sending, setSending] = useState(false);

  // Namespace per domain; single key for whole site
  const { hitUrl, getUrl } = useMemo(() => {
    const namespace = encodeURIComponent(window.location.hostname || "localhost");
    const key = encodeURIComponent("site_visits");
    return {
      hitUrl: `https://api.countapi.xyz/hit/${namespace}/${key}`,
      getUrl: `https://api.countapi.xyz/get/${namespace}/${key}`,
    };
  }, []);

  // Load stored webhook URL
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) || "";
    setWebhookUrl(stored);
  }, []);

  // Increment visit count on first load and retrieve value
  useEffect(() => {
    let cancelled = false;

    const increment = async () => {
      try {
        const res = await fetch(hitUrl, { cache: "no-store" });
        const data = (await res.json()) as { value?: number };
        if (!cancelled) setCount(typeof data.value === "number" ? data.value : null);
        return typeof data.value === "number" ? data.value : null;
      } catch (e) {
        // If hit fails (e.g., temporary issue), try to read existing value
        try {
          const res = await fetch(getUrl, { cache: "no-store" });
          const data = (await res.json()) as { value?: number };
          if (!cancelled) setCount(typeof data.value === "number" ? data.value : null);
          return typeof data.value === "number" ? data.value : null;
        } catch (err) {
          if (!cancelled) setCount(null);
          return null;
        }
      }
    };

    increment().then((current) => {
      // Auto-trigger Zapier webhook if configured
      if (current !== null) {
        triggerZapier(current).catch(() => {/* handled in function */});
      }
    });

    return () => {
      cancelled = true;
    };
  }, [getUrl, hitUrl]);

  const saveWebhook = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (webhookUrl) {
        // Basic validation
        try {
          const u = new URL(webhookUrl);
          if (!u.protocol.startsWith("http")) throw new Error("Invalid protocol");
        } catch {
          toast({ title: "Invalid URL", description: "Please enter a valid Zapier webhook URL.", variant: "destructive" });
          setSaving(false);
          return;
        }
        localStorage.setItem(STORAGE_KEY, webhookUrl);
        toast({ title: "Saved", description: "Zapier webhook URL stored in your browser." });
      } else {
        localStorage.removeItem(STORAGE_KEY);
        toast({ title: "Removed", description: "Zapier webhook URL cleared." });
      }
    } finally {
      setSaving(false);
    }
  }, [toast, webhookUrl]);

  const triggerZapier = useCallback(async (currentCount?: number) => {
    const url = (localStorage.getItem(STORAGE_KEY) || webhookUrl || "").trim();
    if (!url) return; // No webhook configured

    setSending(true);
    try {
      const payload = {
        timestamp: new Date().toISOString(),
        count: typeof currentCount === "number" ? currentCount : count,
        page: window.location.href,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        language: navigator.language,
        // You can map these fields in Zapier to email content
      };

      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors", // Needed for browser -> Zapier
        body: JSON.stringify(payload),
      });

      toast({
        title: "Request sent",
        description: "Visit data sent to Zapier. Check your Zap run history.",
      });
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({ title: "Error", description: "Failed to call Zapier webhook.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  }, [count, toast, webhookUrl]);

  return (
    <section aria-label="Visitor analytics" className="w-full">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-3">
        <div className="text-sm text-muted-foreground">
          Total visits: <span className="font-medium text-foreground">{count ?? "—"}</span>
        </div>

        <form onSubmit={saveWebhook} className="flex w-full flex-col items-stretch gap-2 sm:flex-row">
          <Input
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            placeholder="Paste your Zapier webhook URL (owner only)"
            aria-label="Zapier webhook URL"
            className="flex-1"
          />
          <div className="flex gap-2">
            <Button type="submit" disabled={saving} variant="secondary">
              {saving ? "Saving..." : "Save"}
            </Button>
            <Button type="button" onClick={() => triggerZapier()} disabled={sending || !webhookUrl} variant="outline">
              {sending ? "Sending..." : "Test"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VisitorCounter;
