declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function reportQuoteRequestConversion() {
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  if (!googleAdsId || !conversionLabel || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: `${googleAdsId}/${conversionLabel}`
  });
}

export {};
