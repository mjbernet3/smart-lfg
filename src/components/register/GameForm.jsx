import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { availableGames, platforms } from "utils/constants";
import { showError } from "utils/notifications";
import { validateAccountName } from "utils/validators";

function GameForm({ game, onSubmit, onBack }) {
  const [accountName, setAccountName] = useState("");
  const [platform, setPlatform] = useState(Object.keys(platforms[game])[0]);

  const handleSubmit = () => {
    try {
      validateAccountName(accountName);

      onSubmit(game, {
        accountName,
        platform,
      });

      onBack();
    } catch (e) {
      showError(e.message);
    }
  };

  return (
    <VStack align="stretch" width="100%" spacing="120px">
      <HStack spacing="20px">
        <IconButton
          icon={<ChevronLeftIcon height="30px" width="30px" />}
          size="sm"
          onClick={onBack}
        />
        <Text fontSize={{ base: "xl", md: "2xl" }}>{availableGames[game]}</Text>
      </HStack>
      <Flex paddingX={{ base: "0x", md: "100px" }}>
        <VStack flex={{ base: "1", md: "2" }} align="start" marginRight="20px">
          <Text>Account Name</Text>
          <Input
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          />
        </VStack>
        <VStack flex="1" align="start">
          <Text>Platform</Text>
          <Select
            value={platform}
            variant="filled"
            onChange={(e) => setPlatform(e.target.value)}
          >
            {Object.entries(platforms[game]).map(([code, platform]) => (
              <option key={code} value={code}>
                {platform}
              </option>
            ))}
          </Select>
        </VStack>
      </Flex>
      <Button
        onClick={handleSubmit}
        alignSelf="center"
        minW={{ base: "200px", md: "300px" }}
      >
        Add Game
      </Button>
    </VStack>
  );
}

export default GameForm;
