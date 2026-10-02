import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/Button";

const highlights = [
  "Residential and commercial security",
  "Event and site-based coverage",
  "Clear communication before service starts",
] as const;

export function AboutPreview() {
  return (
    <section className="about-preview" aria-labelledby="about-preview-title">
      <div className="site-container about-preview__container">
        <div className="about-preview__visual" aria-hidden="true">
          <div className="about-preview__crest">
            <span className="about-preview__crest-mark">RF</span>
          </div>
          <div className="about-preview__visual-copy">
            <span>Security planned with discipline</span>
            <span>Support shaped around each location</span>
          </div>
        </div>

        <div className="about-preview__content">
          <p className="about-preview__eyebrow">
            <span aria-hidden="true" />
            About Royal Force
          </p>
          <h2 id="about-preview-title">
            Professional Security Support Built Around Your Location
          </h2>
          <p>
            Royal Force Security Service provides security guard solutions for
            homes, offices, businesses, events, and site-based operations. Our
            focus is to provide a disciplined and dependable security presence
            based on each client’s needs.
          </p>

          <ul className="about-preview__highlights" aria-label="Royal Force Security highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>
                <CheckCircle2 aria-hidden="true" size={19} strokeWidth={1.8} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <Button href="/about">Learn More About Us</Button>
        </div>
      </div>
    </section>
  );
}
