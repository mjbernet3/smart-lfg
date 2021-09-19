import { Button, Flex, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { availableGames } from "utils/constants";
import { showError } from "utils/notifications";
import { validateGames } from "utils/validators";
import ChosenGameCard from "./ChosenGameCard";
import GameForm from "./GameForm";
import StepButtons from "./StepButtons";

function GameStep({ initialGames, onPrev, onNext }) {
  const [chosenGames, setChosenGames] = useState(initialGames);
  const [gameToEdit, setGameToEdit] = useState("");

  const addGame = (game, settings) => {
    const currentGames = { ...chosenGames };
    currentGames[game] = settings;
    setChosenGames(currentGames);
  };

  const removeGame = (game) => {
    const currentGames = { ...chosenGames };
    delete currentGames[game];
    setChosenGames(currentGames);
  };

  const handleNext = () => {
    try {
      validateGames(chosenGames);
      onNext("games", chosenGames);
    } catch (e) {
      showError(e.message);
    }
  };

  return gameToEdit ? (
    <GameForm
      game={gameToEdit}
      onSubmit={addGame}
      onBack={() => setGameToEdit("")}
    />
  ) : (
    <Flex direction="column" justify="space-between" width="100%">
      <VStack align="stretch">
        <Wrap>
          {Object.keys(chosenGames).map((game) => (
            <WrapItem key={game}>
              <ChosenGameCard
                game={game}
                onDelete={(game) => removeGame(game)}
              />
            </WrapItem>
          ))}
        </Wrap>
        <Wrap>
          {Object.entries(availableGames).map(([game, name]) => (
            <WrapItem key={game}>
              <Button
                fontSize={{ base: "md", md: "lg" }}
                height="160px"
                width="160px"
                onClick={() => setGameToEdit(game)}
              >
                {name}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
      <StepButtons stepNumber={1} onPrev={onPrev} onNext={handleNext} />
    </Flex>
  );
}

export default GameStep;
