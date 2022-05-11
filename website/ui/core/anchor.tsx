import type { BoxProps } from "@chakra-ui/react";
import { Box, forwardRef } from "@chakra-ui/react";
import { trimHttp } from "utils/string";

import { createLinkProps } from "./anchor.utils";

export interface AnchorProps extends BoxProps {
  isExternal?: boolean;
}

export const Anchor = forwardRef<AnchorProps, "a">(
  function Anchor({ children, href = "", isExternal: external, ...rest }, ref) {
    const { Wrap, wrapProps, linkProps } = createLinkProps({ href, external });

    return (
      <Wrap {...wrapProps}>
        <Box as="a" {...linkProps} {...rest} href={href} ref={ref}>
          {children ?? (href ? trimHttp(href) : null)}
        </Box>
      </Wrap>
    );
  },
  //
);

export function AnchorCompat(props) {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <Anchor {...props} />;
}
