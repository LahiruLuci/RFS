import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { ClientLogos } from "@/components/sections/home/ClientLogos";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { QuoteCta } from "@/components/sections/home/QuoteCta";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { WhyChooseRoyalForce } from "@/components/sections/home/WhyChooseRoyalForce";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServicesOverview />
      <WhyChooseRoyalForce />
      <ClientLogos />
      <HowItWorks />
      <AboutPreview />
      <QuoteCta />
    </>
  );
}