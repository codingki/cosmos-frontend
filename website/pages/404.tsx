import { Heading, Stack, Text } from "@chakra-ui/react";
import { useSeo } from "hooks/use-seo";
import { Link } from "ui/core/link";

export default function NotFoundPage() {
  const { Seo, title } = useSeo({
    title: "404 Not Found",
  });

  return (
    <Stack align="center" as="section" h="screen-h" justify="center" p={4} textAlign="center">
      <Seo />
      <Heading>{title}</Heading>
      <Text>
        The current page is not available.{" "}
        <Link color="green.500" href="/">
          Head over to home page.
        </Link>
      </Text>
    </Stack>
  );
}
