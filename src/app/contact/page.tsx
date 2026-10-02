import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.legalName}`,
  description:
    "Contact Royal Force Security Service to discuss professional security guard support for homes, offices, businesses, events, and site-based locations.",
};

const contactDetails = [
  {
    label: "Phone",
    value: contactConfig.telephone,
    placeholder: "To be added",
    href: contactConfig.telephone ? `tel:${contactConfig.telephone}` : null,
    icon: Phone,
  },
  {
    label: "Email",
    value: contactConfig.email,
    placeholder: "To be added",
    href: contactConfig.email ? `mailto:${contactConfig.email}` : null,
    icon: Mail,
  },
  {
    label: "Address",
    value: contactConfig.officeAddress,
    placeholder: "To be added",
    href: null,
    icon: MapPin,
  },
  {
    label: "Business Hours",
    value: contactConfig.operatingHours,
    placeholder: "To be added",
    href: null,
    icon: Clock,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero" aria-labelledby="contact-page-title">
        <div className="contact-hero__bg" aria-hidden="true">
          <Image
            src="/images/contact/hero.png"
            alt="Professional security reception desk"
            fill
            priority
            className="contact-hero__image"
          />
          <div className="contact-hero__overlay"></div>
        </div>

        <Container className="contact-hero__container">
          <div className="contact-hero__content">
            <p className="contact-hero__eyebrow">
              <span aria-hidden="true" />
              Contact Us
            </p>
            <h1 id="contact-page-title" className="contact-hero__title">
              Speak With Royal Force Security
            </h1>
            <p className="contact-hero__lead">
              Contact us to discuss security guard services for your home,
              office, business, event, or site-based location.
            </p>
            <div className="contact-hero__actions">
              <Button href="/request-quote" className="contact-hero__button">
                Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="contact-page-main" aria-labelledby="contact-info-title">
        <Container className="contact-page-main__container">
          <aside className="contact-page-info">
            <p className="contact-page__eyebrow contact-page__eyebrow--inverse">
              <span aria-hidden="true" />
              Contact Details
            </p>
            <h2 id="contact-info-title">Contact Information</h2>
            <dl className="contact-page-info__list">
              {contactDetails
                .filter(({ label, value }) => label !== "Business Hours" || Boolean(value))
                .map(({ label, value, placeholder, href, icon: Icon }) => (
                  <div className="contact-page-info__item" key={label}>
                    <span className="contact-page-info__icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <dt>{label}</dt>
                      <dd>
                        {href && value ? (
                          <a href={href}>{value}</a>
                        ) : (
                          <span>{value ?? placeholder}</span>
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
            </dl>
          </aside>

          <ContactForm />
        </Container>
      </section>

      <section className="contact-page-quote-strip" aria-labelledby="contact-quote-title">
        <Container>
          <div className="contact-page-quote-strip__panel">
            <div>
              <p className="contact-page__eyebrow contact-page__eyebrow--inverse">
                <span aria-hidden="true" />
                Service Request
              </p>
              <h2 id="contact-quote-title">Need security support?</h2>
              <p>
                For guard services, event security, or business security
                requirements, request a quote with your service details.
              </p>
            </div>
            <Button href="/request-quote">Request a Quote</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
