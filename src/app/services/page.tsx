import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  HardHat,
  Home,
  Hotel,
  Landmark,
  ShieldCheck,
  Store,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { classNames } from "@/lib/classNames";

export const metadata: Metadata = {
  title: `Security Services | ${siteConfig.legalName}`,
  description:
    "Security guard services for residential, commercial, corporate, event, and site-based locations.",
};

type Service = {
  title: string;
  text: string;
  href: `/${string}`;
  icon: LucideIcon;
};

type DetailService = Service & {
  points: readonly string[];
};

const services = [
  {
    title: "Residential Security",
    text: "Security support for homes, apartments, gated communities, and private residences.",
    href: "/services/residential-security",
    icon: Home,
  },
  {
    title: "Office & Corporate Security",
    text: "Professional guard presence for offices, reception areas, corporate buildings, and business premises.",
    href: "/services/corporate-security",
    icon: Building2,
  },
  {
    title: "Event Security",
    text: "Security support for private functions, public events, business events, and crowd-controlled environments.",
    href: "/services/event-security",
    icon: CalendarCheck,
  },
  {
    title: "Construction Site Security",
    text: "Site security for construction locations, equipment areas, access points, and temporary project sites.",
    href: "/services/construction-security",
    icon: HardHat,
  },
  {
    title: "Factory & Warehouse Security",
    text: "Security coverage for factories, warehouses, storage facilities, and industrial premises.",
    href: "/services/warehouse-security",
    icon: Warehouse,
  },
  {
    title: "Retail & Commercial Security",
    text: "Guarding services for shops, showrooms, customer-facing locations, and commercial buildings.",
    href: "/services/retail-security",
    icon: Store,
  },
  {
    title: "Hotel & Hospitality Security",
    text: "Security support for hotels, guest houses, hospitality venues, and visitor-facing properties.",
    href: "/services/hotel-security",
    icon: Hotel,
  },
  {
    title: "Institutional Security",
    text: "Security presence for schools, training centers, institutions, and managed facilities.",
    href: "/services/institutional-security",
    icon: Landmark,
  },
] as const satisfies readonly Service[];

const detailServices = [
  {
    ...services[0],
    points: ["Guard presence for residential entry points", "Coverage shaped around household or community needs"],
  },
  {
    ...services[1],
    points: ["Support for reception and business access areas", "Professional presence for staff and visitors"],
  },
  {
    ...services[2],
    points: ["Access support for guests and participants", "Visible security for organized event environments"],
  },
  {
    ...services[4],
    points: ["Coverage for storage and operational areas", "Support for industrial premises and access points"],
  },
] as const satisfies readonly DetailService[];

const planningSteps = [
  {
    title: "Understand the location",
    text: "We discuss the site, access points, activity, and service environment.",
  },
  {
    title: "Identify service needs",
    text: "Security coverage is shaped around the property type and client requirement.",
  },
  {
    title: "Arrange suitable personnel",
    text: "Security personnel are assigned based on the agreed service plan.",
  },
] as const;

const [featuredService, ...supportingServices] = services;

function Eyebrow({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return (
    <p className={classNames("services-page__eyebrow", inverse && "services-page__eyebrow--inverse")}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

function ServiceIcon({ icon: Icon, featured = false }: { icon: LucideIcon; featured?: boolean }) {
  return (
    <span className={classNames("services-page__icon", featured && "services-page__icon--featured")} aria-hidden="true">
      <Icon size={featured ? 28 : 22} strokeWidth={1.8} />
    </span>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero" aria-labelledby="services-page-title">
        <div className="services-hero__bg" aria-hidden="true">
          <Image
            src="/images/services/hero.png"
            alt="Professional security team conducting strategic surveillance"
            fill
            priority
            className="services-hero__image"
          />
          <div className="services-hero__overlay"></div>
        </div>

        <Container className="services-hero__container">
          <div className="services-hero__content">
            <Eyebrow inverse>Our Services</Eyebrow>
            <h1 id="services-page-title" className="services-hero__title">
              Security Services for Homes, Businesses and Events
            </h1>
            <p className="services-hero__lead">
              Royal Force Security Service provides professional security guard
              solutions for residential, commercial, corporate, event, and
              site-based locations.
            </p>
            <div className="services-hero__actions" aria-label="Services page actions">
              <Button href="/request-quote" className="services-hero__button">
                Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="services-page-overview" aria-labelledby="services-overview-title">
        <Container>
          <div className="services-page__section-header services-page__section-header--split">
            <div>
              <Eyebrow>Service Overview</Eyebrow>
              <h2 id="services-overview-title">Security support for different locations</h2>
            </div>
            <p>
              Choose the service type that best matches your property, business,
              event, or site requirement.
            </p>
          </div>

          <div className="services-page-overview__grid">
            <Link className="services-page-overview__featured" href={featuredService.href}>
              <ServiceIcon icon={featuredService.icon} featured />
              <span className="services-page-overview__tag">Featured service</span>
              <h3>{featuredService.title}</h3>
              <p>{featuredService.text}</p>
              <span className="services-page__learn-more">
                Learn more
                <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
              </span>
            </Link>

            <div className="services-page-overview__list">
              {supportingServices.map((service) => (
                <Link className="services-page-overview__item" href={service.href} key={service.href}>
                  <ServiceIcon icon={service.icon} />
                  <span>
                    <strong>{service.title}</strong>
                    <small>{service.text}</small>
                  </span>
                  <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="services-page-details" aria-labelledby="service-details-title">
        <Container>
          <div className="services-page__section-header">
            <Eyebrow>Service Details</Eyebrow>
            <h2 id="service-details-title">Service detail previews</h2>
          </div>

          <div className="services-page-details__grid">
            {detailServices.map((service) => (
              <article className="services-page-detail" key={service.href}>
                <ServiceIcon icon={service.icon} />
                <h3>{service.title}</h3>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 aria-hidden="true" size={17} strokeWidth={1.8} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link className="services-page__learn-more" href={service.href}>
                  Learn more
                  <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="services-page-process" aria-labelledby="services-process-title">
        <Container className="services-page-process__container">
          <div className="services-page__section-header">
            <Eyebrow>Planning Coverage</Eyebrow>
            <h2 id="services-process-title">How we plan security coverage</h2>
          </div>

          <ol className="services-page-process__steps" aria-label="Security coverage planning steps">
            {planningSteps.map((step, index) => (
              <li className="services-page-process__step" key={step.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="services-page-cta" aria-labelledby="services-cta-title">
        <Container>
          <div className="services-page-cta__panel">
            <Eyebrow inverse>Request Support</Eyebrow>
            <h2 id="services-cta-title">Need Security for Your Location?</h2>
            <p>
              Tell us your requirement and we will help you plan suitable security
              coverage.
            </p>
            <div className="services-page-cta__actions" aria-label="Services quote actions">
              <Button href="/request-quote">Request a Quote</Button>
              <Button href="/contact" variant="outline" className="services-page__dark-outline">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}