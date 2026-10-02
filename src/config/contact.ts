import type { ContactInformation } from "@/types/site";

export const contactConfig = {
  email: "info@royalforcesecurity.lk",
  telephone: "0777356847",
  whatsapp: null,
  officeAddress: "No. 554/C, Panagoda Junction, Homagama.",
  operatingHours: null,
  socialLinks: [],
} as const satisfies ContactInformation;