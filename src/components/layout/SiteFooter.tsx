import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { SiteBrand } from "@/components/navigation/SiteBrand";
import { contactConfig } from "@/config/contact";
import { navigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";

const quickLinks = navigationItems.map(({ label, href }) => ({ label, href }));

const mainServices = [
  { label: "Residential Security", href: "/services/residential-security" },
  { label: "Office & Corporate Security", href: "/services/corporate-security" },
  { label: "Event Security", href: "/services/event-security" },
  { label: "Construction Site Security", href: "/services/construction-security" },
  { label: "Factory & Warehouse Security", href: "/services/warehouse-security" },
  { label: "Retail & Commercial Security", href: "/services/retail-security" },
] as const;

function ContactValue({ value, fallback, hrefPrefix }: { value: string | null; fallback: string; hrefPrefix?: "tel" | "mailto" }) {
  if (!value) {
    return <span>{fallback}</span>;
  }

  if (!hrefPrefix) {
    return <span>{value}</span>;
  }

  return <a href={`${hrefPrefix}:${value}`}>{value}</a>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-labelledby="site-footer-title">
      <div className="site-footer__pattern" aria-hidden="true" />
      <Container>
        <div className="site-footer__main">
          <div className="site-footer__brand-column">
            <SiteBrand inverse />
            <h2 id="site-footer-title" className="sr-only">
              {siteConfig.legalName}
            </h2>
            <p>
              Professional security solutions for homes, offices, businesses,
              events, and site-based locations.
            </p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer quick links">
            <h3 className="site-footer__heading">Quick Links</h3>
            <ul className="site-footer__links">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__nav" aria-label="Footer service links">
            <h3 className="site-footer__heading">Main Services</h3>
            <ul className="site-footer__links site-footer__links--services">
              {mainServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__contact">
            <h3 className="site-footer__heading">Contact</h3>
            <dl className="site-footer__contact-list">
              <div>
                <dt>Phone</dt>
                <dd>
                  <ContactValue
                    value={contactConfig.telephone}
                    fallback="Phone number to be added"
                    hrefPrefix="tel"
                  />
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <ContactValue
                    value={contactConfig.email}
                    fallback="Email address to be added"
                    hrefPrefix="mailto"
                  />
                </dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>
                  <ContactValue
                    value={contactConfig.officeAddress}
                    fallback="Address to be added"
                  />
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="site-footer__base">
          <p>© 2026 {siteConfig.legalName}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}