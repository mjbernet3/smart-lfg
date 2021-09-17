import {
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import AccountStep from "components/register/AccountStep";
import GameStep from "components/register/GameStep";
import PreferenceStep from "components/register/PreferenceStep";

function Register() {
  const steps = [
    { label: "Games", content: <GameStep /> },
    { label: "Preferences", content: <PreferenceStep /> },
    { label: "Account", content: <AccountStep /> },
  ];

  const { activeStep, prevStep, nextStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Flex height="100%" width="100%" padding="20px">
      <Flex direction="column" flexBasis="800px" margin="auto">
        <Steps activeStep={activeStep} size="lg" colorScheme="blue">
          {steps.map(({ label, content }) => (
            <Step key={label} label={label}>
              <VStack
                height="600px"
                align="stretch"
                marginTop="60px"
                backgroundColor="surface"
                borderRadius="lg"
                padding="20px"
              >
                <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  paddingBottom="20px"
                  textAlign="center"
                >
                  Choose your games
                </Heading>
                <Divider />
                <Flex flex="1" overflow="auto">
                  {content}
                </Flex>
                <HStack justify="flex-end" spacing="10px">
                  <Button
                    onClick={() => prevStep()}
                    isDisabled={activeStep === 0}
                  >
                    Prev
                  </Button>
                  <Button onClick={() => nextStep()}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </HStack>
              </VStack>
            </Step>
          ))}
        </Steps>
      </Flex>
    </Flex>
  );
}

export default Register;
