import { CloseIcon } from "@chakra-ui/icons";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { availableGames } from "utils/constants";

function ChosenGameCard({ game, onDelete }) {
  return (
    <HStack
      justify="center"
      padding="8px 10px"
      backgroundColor="surface.second"
      borderRadius="md"
      spacing="10px"
    >
      <Icon
        as={CloseIcon}
        boxSize="12px"
        onClick={() => onDelete(game)}
        _hover={{ cursor: "pointer" }}
      />
      <Text>{availableGames[game]}</Text>
    </HStack>
  );
}

export default ChosenGameCard;
