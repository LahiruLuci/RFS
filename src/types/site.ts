export interface SiteIdentity {
  legalName: string;
  shortName: string;
  description: string;
  domain: string | null;
  logo: { src: string; width: number; height: number } | null;
}

export interface ContactInformation {
  email: string | null;
  telephone: string | null;
  whatsapp: string | null;
  officeAddress: string | null;
  operatingHours: string | null;
  socialLinks: readonly string[];
}

export interface NavigationItem {
  label: string;
  href: `/${string}`;
  children?: readonly NavigationItem[];
}

export interface SiteAction {
  label: string;
  href: `/${string}`;
}