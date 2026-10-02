import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/navigation/SkipLink";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap", weight: ["400", "500", "600", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading", display: "swap", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = { title: siteConfig.legalName, description: siteConfig.description };
export const viewport: Viewport = { colorScheme: "light", themeColor: "#0c1933" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="site-body"><SkipLink /><SiteHeader /><main id="main-content" className="site-main" tabIndex={-1}>{children}</main><SiteFooter /></body>
    </html>
  );
}