import { Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import AccountStep from "components/register/AccountStep";
import GameStep from "components/register/GameStep";
import PreferenceStep from "components/register/PreferenceStep";
import { useState } from "react";

function Register() {
  const [stepInfo, setStepInfo] = useState({});

  const { activeStep, prevStep, nextStep } = useSteps({
    initialStep: 0,
  });

  const updateStep = (key, values) => {
    const currStepInfo = { ...stepInfo };
    currStepInfo[key] = values;
    setStepInfo(currStepInfo);
    nextStep();
  };

  const steps = [
    {
      label: "Games",
      content: (
        <GameStep
          initialGames={{ ...stepInfo["games"] }}
          onPrev={() => prevStep()}
          onNext={updateStep}
        />
      ),
    },
    { label: "Preferences", content: <PreferenceStep /> },
    { label: "Account", content: <AccountStep /> },
  ];

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
                backgroundColor="surface.first"
                borderRadius="lg"
                padding="20px"
              >
                <Heading
                  fontSize={{ base: "2xl", md: "3xl" }}
                  paddingBottom="20px"
                  textAlign="center"
                >
                  Choose your games
                </Heading>
                <Divider />
                <Flex flex="1" overflow="auto">
                  {content}
                </Flex>
              </VStack>
            </Step>
          ))}
        </Steps>
      </Flex>
    </Flex>
  );
}

export default Register;
