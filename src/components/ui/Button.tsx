import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/classNames";

type ButtonVariant = "primary" | "secondary" | "outline";
type NativeButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
  variant?: ButtonVariant;
};
type LinkButtonProps = Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
  className?: string;
  href: `/${string}`;
  variant?: ButtonVariant;
};
type ButtonProps = NativeButtonProps | LinkButtonProps;

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const classes = classNames(`button-${variant}`, className);

  if ("href" in props && props.href !== undefined) {
    return <Link className={classes} {...props} />;
  }

  return <button className={classes} {...props} />;
}