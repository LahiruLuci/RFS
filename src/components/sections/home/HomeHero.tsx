"use client";

import { ArrowRight, Building2, CalendarCheck, House } from "lucide-react";
import Lightfall from "@/components/Lightfall";

import { Button } from "@/components/ui/Button";

const serviceHighlights = [
  { label: "Residential Security", icon: House },
  { label: "Business Security", icon: Building2 },
  { label: "Event Security", icon: CalendarCheck },
] as const;

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__media" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Lightfall
          colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
          backgroundColor="#0A29FF"
          speed={0.5}
          streakCount={2}
          streakWidth={1}
          streakLength={1}
          glow={0.5}
          density={0.8}
          twinkle={1}
          zoom={3}
          backgroundGlow={0.5}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={1}
        />
      </div>

      <div className="site-container home-hero__container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">
            <span aria-hidden="true" />
            Professional Security Solutions
          </p>
          <h1 id="home-hero-title" className="home-hero__title">
            Professional Security for People, Property and Business
          </h1>
          <p className="home-hero__lead">
            Security personnel for homes, offices, businesses, events and other
            premises, with solutions shaped around each location&rsquo;s requirements.
          </p>
          <div className="home-hero__actions" aria-label="Hero actions">
            <Button href="/request-quote" className="home-hero__primary-action">
              Request a Quote
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
            </Button>
            <Button
              href="/services"
              variant="outline"
              className="home-hero__secondary-action"
            >
              Explore Services
            </Button>
          </div>
        </div>

        <ul className="home-hero__highlights" aria-label="Security service highlights">
          {serviceHighlights.map(({ label, icon: Icon }) => (
            <li className="home-hero__highlight" key={label}>
              <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="home-hero__scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
