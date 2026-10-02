import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/classNames";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={classNames("site-container", className)} {...props} />;
}