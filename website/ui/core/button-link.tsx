import type { ButtonProps } from "@chakra-ui/react";
import { Button, forwardRef } from "@chakra-ui/react";
import { trimHttp } from "utils/string";

import { createLinkProps } from "./anchor.utils";

export interface ButtonLinkProps extends ButtonProps {
  isExternal?: boolean;
}

export const ButtonLink = forwardRef<ButtonLinkProps, "a">(
  function ButtonLink({ children, href = "", isExternal: external, ...rest }, ref) {
    const { Wrap, wrapProps, linkProps } = createLinkProps({ href, external });

    const overrideProps: ButtonLinkProps = {
      pointerEvents: rest.isDisabled ? "none" : "auto",
    };

    return (
      <Wrap {...wrapProps}>
        <Button as="a" {...overrideProps} {...linkProps} {...rest} href={href} ref={ref}>
          {children ?? (href ? trimHttp(href) : null)}
        </Button>
      </Wrap>
    );
  },
  //
);

export function ButtonLinkCompat(props) {
  return <ButtonLink {...props} />;
}
