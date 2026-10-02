"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navigationItems, primarySiteAction } from "@/config/navigation";
import { classNames } from "@/lib/classNames";
import { isNavigationItemActive } from "@/lib/navigation";
import { SiteBrand } from "./SiteBrand";

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNavigation() {
  const pathname = usePathname();
  const servicesItem = navigationItems.find((item) => item.href === "/services");
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(pathname.startsWith("/services"));
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function closeMenu(restoreFocus = true) {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(panelRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []);
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button ref={menuButtonRef} className="menu-button" type="button" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}><Menu aria-hidden="true" size={24} strokeWidth={1.8} /></button>
      {open ? (
        <div className="menu-layer" onMouseDown={(event) => { if (event.target === event.currentTarget) closeMenu(); }}>
          <div ref={panelRef} id="mobile-menu" className="menu-panel" role="dialog" aria-modal="true" aria-label="Main navigation">
            <div className="menu-panel__header"><SiteBrand /><button ref={closeButtonRef} className="menu-button" type="button" aria-label="Close navigation" onClick={() => closeMenu()}><X aria-hidden="true" size={24} strokeWidth={1.8} /></button></div>
            <nav className="mobile-menu" aria-label="Mobile navigation">
              <ul className="mobile-menu__list">
                {navigationItems.map((item) => {
                  const active = isNavigationItemActive(pathname, item);
                  if (!item.children) return <li key={item.href}><Link className={classNames("mobile-menu__link", active && "is-active")} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => closeMenu(false)}>{item.label}</Link></li>;
                  return (
                    <li key={item.href}>
                      <button className={classNames("mobile-menu__link", "mobile-menu__accordion", active && "is-active")} type="button" aria-expanded={servicesOpen} aria-controls="mobile-services" onClick={() => setServicesOpen((value) => !value)}><span>{item.label}</span><ChevronDown className="mobile-menu__chevron" aria-hidden="true" size={19} data-open={servicesOpen || undefined} /></button>
                      {servicesOpen ? <div id="mobile-services" className="mobile-services"><Link className={classNames("mobile-services__link", pathname === item.href && "is-active")} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => closeMenu(false)}>Services overview</Link>{servicesItem?.children?.map((child) => <Link className={classNames("mobile-services__link", pathname === child.href && "is-active")} href={child.href} aria-current={pathname === child.href ? "page" : undefined} onClick={() => closeMenu(false)} key={child.href}>{child.label}</Link>)}</div> : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="menu-panel__footer"><Link className={classNames("header-quote-action", pathname === primarySiteAction.href && "is-active")} href={primarySiteAction.href} aria-current={pathname === primarySiteAction.href ? "page" : undefined} onClick={() => closeMenu(false)}>{primarySiteAction.label}</Link></div>
          </div>
        </div>
      ) : null}
    </div>
  );
}