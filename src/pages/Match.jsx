import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import MatchUserCard from "components/match/MatchUserCard";

function Match() {
  return (
    <Flex height="100%" width="100%" padding="20px">
      <VStack align="stretch" flexBasis="800px" margin="auto">
        <HStack>
          <Box display={{ base: "none", md: "flex" }} flex="1">
            <MatchUserCard />
          </Box>
          <Box display="flex" flex="1">
            <MatchUserCard />
          </Box>
        </HStack>
        <VStack backgroundColor="surface.first" height="500px" overflow="auto">
          <Text>Messages</Text>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default Match;
