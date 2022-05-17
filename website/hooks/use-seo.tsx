import type { NextSeoProps } from "next-seo";
import { NextSeo } from "next-seo";

export function useSeo<T extends NextSeoProps>(props: T) {
  function Seo(extraProps: NextSeoProps) {
    return <NextSeo {...props} {...extraProps} />;
  }
  return { Seo, ...props };
}
