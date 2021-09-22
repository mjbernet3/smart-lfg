import { Button, HStack } from "@chakra-ui/react";

function StepButtons({ stepNumber, onPrev, onNext }) {
  return (
    <HStack justify="flex-end" spacing="10px">
      <Button onClick={onPrev} isDisabled={stepNumber === 1}>
        Prev
      </Button>
      <Button variant={stepNumber === 3 ? "primary" : "solid"} onClick={onNext}>
        {stepNumber === 3 ? "Finish" : "Next"}
      </Button>
    </HStack>
  );
}

export default StepButtons;
