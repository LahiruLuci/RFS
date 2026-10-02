import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/Button";

export function QuoteCta() {
  return (
    <section className="quote-cta" aria-labelledby="quote-cta-title">
      <div className="site-container">
        <div className="quote-cta__panel">
          <div className="quote-cta__crest" aria-hidden="true">
            RF
          </div>
          <div className="quote-cta__corner quote-cta__corner--start" aria-hidden="true" />
          <div className="quote-cta__corner quote-cta__corner--end" aria-hidden="true" />

          <div className="quote-cta__content">
            <p className="quote-cta__eyebrow">
              <span aria-hidden="true" />
              Need Security Support?
            </p>
            <h2 id="quote-cta-title">
              Let&rsquo;s Plan the Right Security Service for Your Location
            </h2>
            <p className="quote-cta__text">
              Tell us what type of security support you need, and we will help
              you arrange a suitable service plan.
            </p>

            <div className="quote-cta__actions" aria-label="Request security support">
              <Button href="/request-quote" className="quote-cta__primary-action">
                Request a Quote
                <ArrowRight aria-hidden="true" size={18} strokeWidth={1.9} />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="quote-cta__secondary-action"
              >
                Contact Us
              </Button>
            </div>

            <p className="quote-cta__trust-line">
              <ShieldCheck aria-hidden="true" size={18} strokeWidth={1.8} />
              Security support for homes, offices, businesses, events, and
              site-based locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}