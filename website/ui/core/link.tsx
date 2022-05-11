import type { LinkProps } from "@chakra-ui/react";
import { forwardRef, Link as ChakraLink } from "@chakra-ui/react";
import { trimHttp } from "utils/string";

import { createLinkProps } from "./anchor.utils";

export const Link = forwardRef<LinkProps, "a">(
  function Link({ children, href = "", isExternal: external, ...rest }, ref) {
    const { isExternal, Wrap, wrapProps } = createLinkProps({ href, external });

    return (
      <Wrap {...wrapProps}>
        <ChakraLink {...rest} href={href} isExternal={isExternal} ref={ref}>
          {children ?? (href ? trimHttp(href) : null)}
        </ChakraLink>
      </Wrap>
    );
  },
  //
);

export function LinkCompat(props) {
  return <Link {...props} />;
}
