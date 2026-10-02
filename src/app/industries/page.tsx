import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  CalendarCheck,
  Factory,
  GraduationCap,
  HardHat,
  Home,
  Hotel,
  ShieldCheck,
  Store,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Industries We Serve | ${siteConfig.legalName}`,
  description:
    "Security guard coverage for residential, commercial, event, industrial, hospitality, institutional, and site-based environments.",
};

type Industry = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const industries = [
  {
    title: "Homes & Apartments",
    text: "Security support for private residences, apartments, and gated communities.",
    icon: Home,
  },
  {
    title: "Offices & Corporate Buildings",
    text: "Professional guard presence for business premises and office environments.",
    icon: Building2,
  },
  {
    title: "Retail Shops & Showrooms",
    text: "Security support for customer-facing commercial locations.",
    icon: Store,
  },
  {
    title: "Warehouses & Factories",
    text: "Security coverage for storage, production, and industrial premises.",
    icon: Factory,
  },
  {
    title: "Construction Sites",
    text: "Guard support for project sites, equipment areas, and access points.",
    icon: HardHat,
  },
  {
    title: "Hotels & Guest Houses",
    text: "Security presence for hospitality and visitor-facing properties.",
    icon: Hotel,
  },
  {
    title: "Events & Private Functions",
    text: "Security support for gatherings, functions, and event spaces.",
    icon: CalendarCheck,
  },
  {
    title: "Schools & Institutions",
    text: "Guard presence for institutions, training centers, and managed facilities.",
    icon: GraduationCap,
  },
] as const satisfies readonly Industry[];

const planningPoints = [
  "Understand the environment",
  "Identify service needs",
  "Arrange suitable guard support",
] as const;

const [featuredIndustry, ...supportingIndustries] = industries;

function IndustryIcon({ icon: Icon, featured = false }: { icon: LucideIcon; featured?: boolean }) {
  return (
    <span className={featured ? "industries-page__icon industries-page__icon--featured" : "industries-page__icon"} aria-hidden="true">
      <Icon size={featured ? 30 : 22} strokeWidth={1.8} />
    </span>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <section className="industries-hero" aria-labelledby="industries-page-title">
        <div className="industries-hero__bg" aria-hidden="true">
          <Image
            src="/images/industries/hero.png"
            alt="Luxury architectural building at twilight"
            fill
            priority
            className="industries-hero__image"
          />
          <div className="industries-hero__overlay"></div>
        </div>

        <Container className="industries-hero__container">
          <div className="industries-hero__content">
            <p className="industries-hero__eyebrow">
              <span aria-hidden="true" />
              Industries We Serve
            </p>
            <h1 id="industries-page-title" className="industries-hero__title">
              Security Coverage for Different Locations
            </h1>
            <p className="industries-hero__lead">
              Royal Force Security Service provides guard support for residential,
              commercial, event, industrial, and site-based environments.
            </p>
            <div className="industries-hero__actions">
              <Button href="/request-quote" className="industries-hero__button">
                Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="industries-page-sectors" aria-labelledby="industries-sectors-title">
        <Container>
          <div className="industries-page__section-header">
            <p className="industries-page__eyebrow industries-page__eyebrow--light">
              <span aria-hidden="true" />
              Coverage Sectors
            </p>
            <h2 id="industries-sectors-title">Main environments we can support</h2>
          </div>

          <div className="industries-page-sectors__grid">
            <article className="industries-page-sector industries-page-sector--featured">
              <IndustryIcon icon={featuredIndustry.icon} featured />
              <span className="industries-page-sector__label">Featured environment</span>
              <h3>{featuredIndustry.title}</h3>
              <p>{featuredIndustry.text}</p>
            </article>

            <div className="industries-page-sectors__tiles">
              {supportingIndustries.map((industry) => (
                <article className="industries-page-sector" key={industry.title}>
                  <IndustryIcon icon={industry.icon} />
                  <h3>{industry.title}</h3>
                  <p>{industry.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="industries-page-planning" aria-labelledby="industries-planning-title">
        <Container className="industries-page-planning__container">
          <div className="industries-page-planning__content">
            <p className="industries-page__eyebrow industries-page__eyebrow--light">
              <span aria-hidden="true" />
              Security Planning
            </p>
            <h2 id="industries-planning-title">Every Location Needs a Different Security Plan</h2>
            <p>
              Security requirements can change based on access points, operating
              hours, visitor flow, property type, and client expectations.
            </p>
          </div>

          <ol className="industries-page-planning__list" aria-label="Security planning points">
            {planningPoints.map((point, index) => (
              <li key={point}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {point}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="industries-page-cta" aria-labelledby="industries-cta-title">
        <Container>
          <div className="industries-page-cta__panel">
            <p className="industries-page__eyebrow">
              <span aria-hidden="true" />
              Request Support
            </p>
            <h2 id="industries-cta-title">Need Security for Your Location?</h2>
            <p>
              Tell us your location and requirement, and we will help you plan
              suitable security coverage.
            </p>
            <div className="industries-page-cta__actions">
              <Button href="/request-quote">Request a Quote</Button>
              <Button href="/contact" variant="outline" className="industries-page__dark-outline">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

// Fix cache