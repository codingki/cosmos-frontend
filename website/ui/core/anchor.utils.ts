import Link from "next/link";
import type { ComponentType } from "react";
import { Fragment } from "react";

export function createLinkProps({ href, external }: { href: string; external?: boolean }) {
  const isApi = href.startsWith("/api");
  const isRelative = href.startsWith("/");
  const isExternal = typeof external === "boolean" ? external : isApi || !isRelative;

  const Wrap = (isExternal ? Fragment : Link) as ComponentType<any>;
  const wrapProps = isExternal ? {} : { href };
  const linkProps = isExternal ? { target: "_blank" } : {};

  return { isApi, isRelative, isExternal, Wrap, wrapProps, linkProps };
}
