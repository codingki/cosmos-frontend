import { Box, Button, Center, HStack, Stack, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";
import { useAccount, useActiveChain, useConnect, useDisconnect } from "graz";

export default function HomePage() {
  const { isConnected, data: account } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const activeChain = useActiveChain();

  return (
    <Center minH="100vh">
      <Stack bgColor="whiteAlpha.100" boxShadow="md" maxW="md" p={4} rounded="md" spacing={4} w="full">
        <HStack>
          <Tag>
            <TagLeftIcon as={Box} bgColor={isConnected ? "green.500" : "red.500"} boxSize={3} rounded="full" />
            <TagLabel>{isConnected ? "Connected" : "Disconnected"}</TagLabel>
          </Tag>
        </HStack>
        <Text>
          Active chain id: <b>{activeChain?.chainId}</b>
        </Text>
        <Text>
          Name: <b>{account?.name}</b>
        </Text>
        <Text noOfLines={1} wordBreak="break-all">
          Address: <b>{account?.bech32Address}</b>
        </Text>
        <HStack align="end" pt={4}>
          <Button onClick={() => (isConnected ? disconnect() : connect())}>
            {isConnected ? "Disconnect" : "Connect Wallet"}
          </Button>
        </HStack>
      </Stack>
    </Center>
  );
}
