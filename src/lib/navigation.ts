import type { NavigationItem } from "@/types/site";

export function isNavigationItemActive(pathname: string, item: NavigationItem): boolean {
  if (item.href === "/") return pathname === "/";
  if (item.href === "/contact" || item.href === "/request-quote") return pathname === item.href;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}