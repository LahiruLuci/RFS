import type { NavigationItem, SiteAction } from "@/types/site";

export const serviceNavigationItems: readonly NavigationItem[] = [
  { label: "Residential Security", href: "/services/residential-security" },
  { label: "Office and Corporate Security", href: "/services/corporate-security" },
  { label: "Event Security", href: "/services/event-security" },
  { label: "Construction-Site Security", href: "/services/construction-security" },
  { label: "Factory and Warehouse Security", href: "/services/warehouse-security" },
  { label: "Retail Security", href: "/services/retail-security" },
  { label: "Hotel Security", href: "/services/hotel-security" },
  { label: "Institutional Security", href: "/services/institutional-security" },
];

export const navigationItems: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const primarySiteAction = {
  label: "Request a Quote",
  href: "/request-quote",
} as const satisfies SiteAction;