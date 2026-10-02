import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

interface SiteBrandProps {
  inverse?: boolean;
}

export function SiteBrand({ inverse = false }: SiteBrandProps) {
  return (
    <Link className="site-brand" data-inverse={inverse || undefined} href="/" aria-label={`${siteConfig.legalName} home`}>
      {siteConfig.logo ? <Image className="site-brand__logo" src={siteConfig.logo.src} width={siteConfig.logo.width} height={siteConfig.logo.height} alt="" priority /> : null}
      <span className="site-brand__name" aria-hidden="true">Royal Force <small>Security</small></span>
    </Link>
  );
}