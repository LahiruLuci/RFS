import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ClipboardCheck,
  MapPinned,
  MessageSquareText,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { classNames } from "@/lib/classNames";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.legalName}`,
  description:
    "Learn about Royal Force Security Service and its professional approach to security guard support for homes, businesses, events, and site-based locations.",
};

type FocusItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const overviewHighlights = [
  "Residential and commercial security coverage",
  "Event and temporary site security support",
  "Clear service planning before guards are assigned",
] as const;

const focusItems = [
  {
    title: "Professional Presence",
    text: "A disciplined guard presence that supports safety and trust.",
    icon: UserCheck,
  },
  {
    title: "Location Awareness",
    text: "Security planning based on the property type and access points.",
    icon: MapPinned,
  },
  {
    title: "Clear Communication",
    text: "Requirements are discussed clearly before service begins.",
    icon: MessageSquareText,
  },
  {
    title: "Responsible Service",
    text: "Security support should stay organized, reliable, and suitable for the location.",
    icon: ClipboardCheck,
  },
] as const satisfies readonly FocusItem[];

const serviceValues = ["Discipline", "Responsibility", "Trust", "Professionalism"] as const;
const serviceEnvironments = ["Homes", "Offices", "Businesses", "Events", "Sites"] as const;
const planningNotes = ["Understand", "Plan", "Assign"] as const;

function AboutEyebrow({
  children,
  inverse = false,
}: {
  children: ReactNode;
  inverse?: boolean;
}) {
  return (
    <p className={classNames("about-page__eyebrow", inverse && "about-page__eyebrow--inverse")}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

function FocusIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="about-page-focus__icon" aria-hidden="true">
      <Icon size={22} strokeWidth={1.8} />
    </span>
  );
}

export default function AboutPage() {
  const logo = siteConfig.logo;

  return (
    <>
      <section className="about-page-hero" aria-labelledby="about-page-title">
        <Container className="about-page-hero__container">
          <div className="about-page-hero__content">
            <AboutEyebrow inverse>About Royal Force</AboutEyebrow>
            <h1 id="about-page-title">Professional Security Support with Discipline and Responsibility</h1>
            <p>
              Royal Force Security Service provides security guard solutions for
              homes, offices, businesses, events, and site-based locations. Our
              approach is built around clear communication, professional
              presence, and service planning based on each client&apos;s
              environment.
            </p>
            <div className="about-page-hero__actions">
              <Button href="/request-quote" className="about-page-hero__button">
                Request a Quote
                <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
              </Button>
            </div>
          </div>

          <aside className="about-page-hero__visual" aria-label="Royal Force security service approach">
            <div className="about-page-hero__seal">
              {logo ? (
                <Image
                  src={logo.src}
                  alt="Royal Force Security Service logo"
                  width={logo.width}
                  height={logo.height}
                  sizes="96px"
                  priority
                />
              ) : (
                <span aria-hidden="true">RF</span>
              )}
            </div>
            <div className="about-page-hero__visual-copy">
              <span>Service approach</span>
              <strong>Security arranged around each location.</strong>
            </div>
            <ol className="about-page-hero__steps" aria-label="Security service planning summary">
              {planningNotes.map((note, index) => (
                <li key={note}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {note}
                </li>
              ))}
            </ol>
          </aside>
        </Container>
      </section>

      <section className="about-page-overview" aria-labelledby="about-overview-title">
        <Container className="about-page-overview__container">
          <div className="about-page-overview__content">
            <AboutEyebrow>Company Overview</AboutEyebrow>
            <h2 id="about-overview-title">Security Service Built Around Real Locations</h2>
            <p>
              Every property, business, and event has different security needs.
              We focus on understanding the location first, then arranging
              suitable security support based on the client&apos;s requirements.
            </p>
            <ul className="about-page-overview__environments" aria-label="Security service environments">
              {serviceEnvironments.map((environment) => (
                <li key={environment}>{environment}</li>
              ))}
            </ul>
          </div>

          <div className="about-page-overview__highlights" aria-label="Company overview highlights">
            {overviewHighlights.map((highlight, index) => (
              <div className="about-page-overview__highlight" key={highlight}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="about-page-focus" aria-labelledby="about-focus-title">
        <Container className="about-page-focus__container">
          <div className="about-page__section-header">
            <AboutEyebrow>Service Approach</AboutEyebrow>
            <h2 id="about-focus-title">What We Focus On</h2>
          </div>

          <div className="about-page-focus__list">
            {focusItems.map((item, index) => (
              <article className="about-page-focus__item" key={item.title}>
                <span className="about-page-focus__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <FocusIcon icon={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="about-page-values" aria-labelledby="about-values-title">
        <Container>
          <div className="about-page-values__panel">
            <div>
              <AboutEyebrow inverse>Our Standards</AboutEyebrow>
              <h2 id="about-values-title">Our Service Values</h2>
            </div>
            <ul className="about-page-values__list" aria-label="Royal Force service values">
              {serviceValues.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="about-page-cta" aria-labelledby="about-cta-title">
        <Container>
          <div className="about-page-cta__panel">
            <ShieldCheck className="about-page-cta__mark" aria-hidden="true" size={54} strokeWidth={1.35} />
            <AboutEyebrow inverse>Next Step</AboutEyebrow>
            <h2 id="about-cta-title">Looking for Security Support?</h2>
            <p>
              Tell us your location and requirement, and we will help you plan
              suitable security coverage.
            </p>
            <div className="about-page-cta__actions" aria-label="About page actions">
              <Button href="/request-quote">Request a Quote</Button>
              <Button href="/contact" variant="outline" className="about-page__dark-outline">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
