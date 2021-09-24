import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Select,
  Spinner,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { availableGames, matchmakingTypes } from "utils/constants";

function Home() {
  const [selectedGame, setSelectedGame] = useState(
    Object.keys(availableGames)[0]
  );
  const [matchMode, setMatchMode] = useState(Object.keys(matchmakingTypes)[0]);
  const [searching, setSearching] = useState(false);

  const startSearch = () => {
    setSearching(true);
  };

  const stopSearch = () => {
    setSearching(false);
  };

  return (
    <Flex height="100%" width="100%" padding="20px">
      {searching ? (
        <Center flex="1">
          <VStack spacing="20px">
            <Heading>Searching for players...</Heading>
            <Spinner speed="1.2s" color="primary" size="xl" />
            <Button onClick={stopSearch}>Cancel Search</Button>
          </VStack>
        </Center>
      ) : (
        <VStack margin="auto" spacing="60px">
          <Wrap spacing="20px">
            {Object.entries(availableGames).map(([game, name]) => (
              <WrapItem key={game}>
                <Button
                  padding="20px"
                  width={{ base: "200px", md: "350px" }}
                  height={{ base: "200px", md: "350px" }}
                  fontSize={{ base: "lg", md: "3xl" }}
                  borderRadius="xl"
                  color={selectedGame !== game ? "medEmphasisText" : ""}
                  onClick={() => setSelectedGame(game)}
                >
                  {name}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
          <HStack width="450px">
            <Button variant="primary" width="60%" onClick={startSearch}>
              Find a Teammate
            </Button>
            <Select
              value={matchMode}
              width="40%"
              onChange={(e) => setMatchMode(e.target.value)}
            >
              {Object.entries(matchmakingTypes).map(([type, name]) => (
                <option key={type} value={type}>
                  {name}
                </option>
              ))}
            </Select>
          </HStack>
        </VStack>
      )}
    </Flex>
  );
}

export default Home;
