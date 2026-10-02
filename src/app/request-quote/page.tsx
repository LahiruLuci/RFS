import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ShieldCheck } from "lucide-react";

import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Request a Quote | ${siteConfig.legalName}`,
  description:
    "Request security guard support from Royal Force Security Service for homes, offices, businesses, events, and site-based locations.",
};

const supportPoints = [
  "Homes and apartments",
  "Offices and commercial buildings",
  "Events and private functions",
  "Construction sites and warehouses",
  "Temporary or ongoing guard service",
] as const;

export default function RequestQuotePage() {
  const phone = contactConfig.telephone;

  return (
    <>
      <section className="quote-page-hero" aria-labelledby="quote-page-title">
        <Container className="quote-page-hero__container">
          <div className="quote-page-hero__content">
            <p className="quote-page__eyebrow">
              <span aria-hidden="true" />
              Request a Quote
            </p>
            <h1 id="quote-page-title">Tell Us Your Security Requirement</h1>
            <p>
              Share your location, service type, and contact details. We will
              review your requirement and help you plan suitable security
              support.
            </p>
          </div>

          <div className="quote-page-hero__mark" aria-hidden="true">
            <ShieldCheck size={44} strokeWidth={1.4} />
            <span>RF</span>
          </div>
        </Container>
      </section>

      <section className="quote-page-form-section" aria-labelledby="quote-form-section-title">
        <Container className="quote-page-form-section__container">
          <aside className="quote-page-support">
            <p className="quote-page__eyebrow quote-page__eyebrow--inverse">
              <span aria-hidden="true" />
              Service Request
            </p>
            <h2 id="quote-form-section-title">Security Support Made Simple</h2>
            <ul className="quote-page-support__list">
              {supportPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 aria-hidden="true" size={18} strokeWidth={1.8} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="quote-page-support__note">
              Please provide accurate details so we can understand your
              requirement clearly.
            </p>
          </aside>

          <QuoteRequestForm />
        </Container>
      </section>

      <section className="quote-page-contact-strip" aria-labelledby="quote-contact-title">
        <Container>
          <div className="quote-page-contact-strip__panel">
            <div>
              <p className="quote-page__eyebrow quote-page__eyebrow--inverse">
                <span aria-hidden="true" />
                Direct Support
              </p>
              <h2 id="quote-contact-title">Need to speak directly?</h2>
              <p>
                You can also contact us directly for urgent security
                requirements.
              </p>
            </div>
            <div className="quote-page-contact-strip__actions">
              <Button href="/contact">Contact Us</Button>
              {phone ? (
                <Link className="button-outline quote-page__dark-outline" href={`tel:${phone}`}>
                  <Phone aria-hidden="true" size={18} strokeWidth={1.8} />
                  Call Now
                </Link>
              ) : null}

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
