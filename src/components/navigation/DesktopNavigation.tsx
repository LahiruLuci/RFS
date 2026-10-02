"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navigationItems, primarySiteAction } from "@/config/navigation";
import { classNames } from "@/lib/classNames";
import { isNavigationItemActive } from "@/lib/navigation";

export function DesktopNavigation() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && servicesOpen) {
        setServicesOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

  return (
    <div className="desktop-navigation">
      <nav aria-label="Main navigation">
        <ul className="desktop-navigation__list">
          {navigationItems.map((item) => {
            const active = isNavigationItemActive(pathname, item);
            if (!item.children) {
              return <li key={item.href}><Link className={classNames("desktop-navigation__link", active && "is-active")} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link></li>;
            }

            return (
              <li ref={servicesRef} className="services-navigation" key={item.href} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}>
                <div className="services-navigation__trigger">
                  <Link className={classNames("desktop-navigation__link", active && "is-active")} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
                  <button ref={toggleRef} className="services-navigation__toggle" type="button" aria-label={`${servicesOpen ? "Close" : "Open"} Services menu`} aria-expanded={servicesOpen} aria-controls="services-dropdown" onClick={() => setServicesOpen((value) => !value)}>
                    <ChevronDown aria-hidden="true" size={17} strokeWidth={2} />
                  </button>
                </div>
                {servicesOpen ? (
                  <div id="services-dropdown" className="services-dropdown">
                    <ul>
                      {item.children.map((child) => {
                        const exact = pathname === child.href;
                        return <li key={child.href}><Link className={classNames("services-dropdown__link", exact && "is-active")} href={child.href} aria-current={exact ? "page" : undefined} onClick={() => setServicesOpen(false)}>{child.label}</Link></li>;
                      })}
                    </ul>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
      <Link className={classNames("header-quote-action", pathname === primarySiteAction.href && "is-active")} href={primarySiteAction.href} aria-current={pathname === primarySiteAction.href ? "page" : undefined}>{primarySiteAction.label}</Link>
    </div>
  );
}