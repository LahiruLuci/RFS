import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  ClipboardCheck,
  MessageSquareText,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { CareerInterestForm } from "@/components/forms/CareerInterestForm";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Careers | ${siteConfig.legalName}`,
  description:
    "Submit interest in security guard or security-related career opportunities with Royal Force Security Service.",
};

type Quality = {
  title: string;
  icon: LucideIcon;
};

const qualities = [
  { title: "Discipline", icon: ShieldCheck },
  { title: "Responsibility", icon: ClipboardCheck },
  { title: "Professional appearance", icon: BadgeCheck },
  { title: "Clear communication", icon: MessageSquareText },
] as const satisfies readonly Quality[];

const roleTypes = [
  "Security Guard",
  "Site Security Officer",
  "Event Security Personnel",
  "Supervisor / Team Leader",
  "Office or Facility Security Support",
] as const;

export default function CareersPage() {
  return (
    <>
      <section className="careers-hero" aria-labelledby="careers-page-title">
        <div className="careers-hero__bg" aria-hidden="true">
          <Image
            src="/images/careers/hero.png"
            alt="Professional security officer in luxury lobby"
            fill
            priority
            className="careers-hero__image"
          />
          <div className="careers-hero__overlay"></div>
        </div>

        <Container className="careers-hero__container">
          <div className="careers-hero__content">
            <p className="careers-hero__eyebrow">
              <span aria-hidden="true" />
              Careers
            </p>
            <h1 id="careers-page-title" className="careers-hero__title">
              Join Royal Force Security Service
            </h1>
            <p className="careers-hero__lead">
              We welcome disciplined, responsible, and professional individuals
              who are interested in security service opportunities.
            </p>
            <div className="careers-hero__actions">
              <a className="button-primary careers-hero__button" href="#career-application-form">
                Apply Now
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="careers-page-qualities" aria-labelledby="careers-qualities-title">
        <Container>
          <div className="careers-page__section-header">
            <p className="careers-page__eyebrow careers-page__eyebrow--light">
              <span aria-hidden="true" />
              Candidate Qualities
            </p>
            <h2 id="careers-qualities-title">Who We Look For</h2>
            <p>
              Security work requires reliability, alertness, and respect for
              client locations.
            </p>
          </div>

          <div className="careers-page-qualities__grid">
            {qualities.map(({ title, icon: Icon }) => (
              <article className="careers-page-quality" key={title}>
                <span aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="careers-page-roles" aria-labelledby="careers-roles-title">
        <Container className="careers-page-roles__container">
          <div className="careers-page-roles__content">
            <p className="careers-page__eyebrow careers-page__eyebrow--light">
              <span aria-hidden="true" />
              Possible Roles
            </p>
            <h2 id="careers-roles-title">Security Career Opportunities</h2>
            <p>Available positions may change based on company requirements.</p>
          </div>

          <ul className="careers-page-roles__list" aria-label="Security role types">
            {roleTypes.map((role, index) => (
              <li key={role}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {role}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="careers-page-application" aria-labelledby="career-application-title">
        <Container className="careers-page-application__container">
          <aside className="careers-page-application__panel">
            <p className="careers-page__eyebrow">
              <span aria-hidden="true" />
              Application Interest
            </p>
            <h2>Professional security starts with responsible people.</h2>
            <p>
              Use this form to share your interest. This does not confirm a
              vacancy or employment offer.
            </p>
          </aside>

          <CareerInterestForm />
        </Container>
      </section>

      <section className="careers-page-cta" aria-labelledby="careers-cta-title">
        <Container>
          <div className="careers-page-cta__panel">
            <p className="careers-page__eyebrow">
              <span aria-hidden="true" />
              Questions
            </p>
            <h2 id="careers-cta-title">Need to Contact Us First?</h2>
            <p>
              For questions about career opportunities, contact Royal Force
              Security directly.
            </p>
            <Button href="/contact">Contact Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
