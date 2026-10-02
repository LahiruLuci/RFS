import {
  BadgeCheck,
  ClipboardCheck,
  Clock,
  MapPinned,
  MessageSquareText,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

type TrustPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const trustPoints: readonly TrustPoint[] = [
  {
    title: "Trained Security Personnel",
    description:
      "Guards are selected and prepared to maintain a professional presence at client locations.",
    icon: UserCheck,
  },
  {
    title: "Location-Based Planning",
    description:
      "Security support is planned around the property type, entry points, operating hours, and client requirements.",
    icon: MapPinned,
  },
  {
    title: "Professional Appearance",
    description:
      "A clean, disciplined security presence helps protect the location while supporting the client’s image.",
    icon: BadgeCheck,
  },
  {
    title: "Clear Communication",
    description:
      "Clients can discuss requirements clearly before service begins, so expectations are understood from the start.",
    icon: MessageSquareText,
  },
  {
    title: "Flexible Security Coverage",
    description:
      "Security can be arranged for homes, offices, commercial premises, events, and temporary site needs.",
    icon: Clock,
  },
  {
    title: "Responsible Supervision",
    description:
      "Service quality should remain organized through proper coordination, reporting, and follow-up.",
    icon: ClipboardCheck,
  },
] as const;

function WhyChooseItem({
  point,
  index,
}: {
  point: TrustPoint;
  index: number;
}) {
  const Icon = point.icon;
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="why-choose__item">
      <span className="why-choose__number" aria-hidden="true">
        {number}
      </span>
      <span className="why-choose__icon" aria-hidden="true">
        <Icon size={21} strokeWidth={1.8} />
      </span>
      <span className="why-choose__item-copy">
        <span className="why-choose__item-title">{point.title}</span>
        <span>{point.description}</span>
      </span>
    </li>
  );
}

export function WhyChooseRoyalForce() {
  return (
    <section className="why-choose" aria-labelledby="why-choose-title">
      <Container className="why-choose__container">
        <div className="why-choose__content">
          <p className="why-choose__eyebrow">
            <span aria-hidden="true" />
            Trusted Security Support
          </p>
          <h2 id="why-choose-title">Why Choose Royal Force Security</h2>
          <p className="why-choose__intro">
            Security is not only about presence. It is about discipline,
            planning, communication, and the right personnel for the right
            location. Royal Force Security Service focuses on dependable guard
            services shaped around each client’s environment.
          </p>

          <div className="why-choose__feature">
            <ShieldCheck aria-hidden="true" size={28} strokeWidth={1.7} />
            <p>
              Professional security support for homes, offices, commercial
              locations, events, and site-based operations.
            </p>
          </div>

          <div className="why-choose__actions">
            <Button href="/request-quote">Request a Quote</Button>
            <Button
              href="/contact"
              variant="outline"
              className="why-choose__secondary-action"
            >
              Contact Us
            </Button>
          </div>
        </div>

        <ol className="why-choose__list" aria-label="Reasons to choose Royal Force Security">
          {trustPoints.map((point, index) => (
            <WhyChooseItem point={point} index={index} key={point.title} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
