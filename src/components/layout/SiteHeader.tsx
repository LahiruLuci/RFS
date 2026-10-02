import { Container } from "@/components/layout/Container";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { SiteBrand } from "@/components/navigation/SiteBrand";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <SiteBrand />
        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}