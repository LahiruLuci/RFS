import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MessageSquareText, MapPinned, UserCheck } from "lucide-react";

const steps = [
  {
    title: "Discuss Your Requirement",
    text: "Tell us your location, service type, and expected security needs.",
    icon: MessageSquareText,
  },
  {
    title: "Plan the Security Coverage",
    text: "We review the environment and prepare suitable guard arrangements.",
    icon: MapPinned,
  },
  {
    title: "Start the Service",
    text: "Security personnel are assigned based on the agreed plan.",
    icon: UserCheck,
  },
] as const;

export function HowItWorks() {
  return (
    <section className="process-flow" aria-labelledby="process-flow-title">
      <Container>
        <div className="process-flow__header">
          <p className="process-flow__eyebrow">
            <span aria-hidden="true" />
            Simple Process
          </p>
          <h2 id="process-flow-title" className="process-flow__title">
            How We Arrange Your Security Service
          </h2>
          <p className="process-flow__intro">
            A clear process to understand your location, plan the service, and
            assign the right security support.
          </p>
        </div>

        <div className="process-flow__steps">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const numberString = String(index + 1).padStart(2, "0");

            return (
              <div className="process-flow__step" key={step.title}>
                <div className="process-flow__step-visual">
                  <span className="process-flow__number" aria-hidden="true">
                    {numberString}
                  </span>
                  <div className="process-flow__line" aria-hidden="true" />
                </div>
                <div className="process-flow__card">
                  <div className="process-flow__icon-wrap">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="process-flow__step-title">{step.title}</h3>
                  <p className="process-flow__step-text">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="process-flow__action">
          <Button href="/request-quote">Request a Quote</Button>
        </div>
      </Container>
    </section>
  );
}
