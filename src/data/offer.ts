/**
 * Offer terms, kept in a data source rather than hardcoded in components
 * (refonte brief 2, section 3). No prices here until they are validated
 * commercially; only the access model that is already decided.
 */
export const offer = {
  oneTimePayment: true,
  subscription: false,
  accessMonths: 12,
  certifyingWeeks: 12,
  certificateAfterEvaluation: true,
} as const;

/** UTM-tagged link to the B2B site, per audience/placement. */
export function fdUtm(base: string, content: string): string {
  const params = new URLSearchParams({
    utm_source: "claudeinfinance",
    utm_medium: "referral",
    utm_campaign: "organizations",
    utm_content: content,
  });
  return `${base}?${params.toString()}`;
}
