import {
  ArrowRight,
  Building2,
  CalendarCheck,
  HardHat,
  Home,
  Store,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

type ServicePreview = {
  title: string;
  description: string;
  href: `/${string}`;
  icon: LucideIcon;
};

const services: readonly ServicePreview[] = [
  {
    title: "Residential Security",
    description:
      "Security guards for homes, apartments, gated communities, and private residences.",
    href: "/services/residential-security",
    icon: Home,
  },
  {
    title: "Office & Corporate Security",
    description:
      "Professional security presence for offices, business premises, reception areas, and staff environments.",
    href: "/services/corporate-security",
    icon: Building2,
  },
  {
    title: "Event Security",
    description:
      "Crowd control, access support, and visible security for private, public, and corporate events.",
    href: "/services/event-security",
    icon: CalendarCheck,
  },
  {
    title: "Construction Site Security",
    description:
      "Site monitoring and access control for construction locations, equipment areas, and project sites.",
    href: "/services/construction-security",
    icon: HardHat,
  },
  {
    title: "Factory & Warehouse Security",
    description:
      "Security support for warehouses, factories, storage facilities, and industrial premises.",
    href: "/services/warehouse-security",
    icon: Warehouse,
  },
  {
    title: "Retail & Commercial Security",
    description:
      "Guarding services for shops, showrooms, commercial buildings, and customer-facing locations.",
    href: "/services/retail-security",
    icon: Store,
  },
] as const;

const [featuredService, ...supportingServices] = services;

export function ServicesOverview() {
  const FeaturedIcon = featuredService.icon;

  return (
    <section className="services-overview" aria-labelledby="services-overview-title">
      <Container>
        <div className="services-overview__header">
          <p className="services-overview__eyebrow">
            <span aria-hidden="true" />
            Security Solutions
          </p>
          <h2 id="services-overview-title">
            Security Solutions for Every Location
          </h2>
          <p className="services-overview__intro">
            Royal Force Security Service provides trained security personnel for
            residential, commercial, corporate, event, and site-based protection
            needs. Each service is planned around the location, risk level,
            operating hours, and client requirements.
          </p>
        </div>

        <div className="services-overview__bento">
          <Link
            className="service-card service-card--featured"
            href={featuredService.href}
            aria-label={`${featuredService.title}: ${featuredService.description}`}
          >
            <div>
              <span className="service-card__icon-wrapper" aria-hidden="true">
                <FeaturedIcon size={28} strokeWidth={1.5} />
              </span>
              <h3 className="service-card__title">{featuredService.title}</h3>
              <p className="service-card__desc">{featuredService.description}</p>
            </div>

            <div className="service-card__footer">
              <span className="service-card__learn-more">
                Learn more
                <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
              </span>
              <span className="service-card__arrow" aria-hidden="true">
                <ArrowRight size={20} strokeWidth={2} />
              </span>
            </div>
          </Link>

          {supportingServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className={`service-card service-card--${index + 1}`}
              >
                <span className="service-card__icon-wrapper" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <div className="service-card__footer">
                  <span className="service-card__arrow" aria-hidden="true">
                    <ArrowRight size={18} strokeWidth={2} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="services-overview__actions">
          <Button href="/request-quote">Request a Quote</Button>
          <Link className="services-overview__text-link" href="/services">
            View All Services
            <ArrowRight aria-hidden="true" size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
