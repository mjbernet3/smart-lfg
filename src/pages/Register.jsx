import {
  Center,
  Divider,
  Flex,
  Heading,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import AccountStep from "components/register/AccountStep";
import GameStep from "components/register/GameStep";
import PreferenceStep from "components/register/PreferenceStep";
import { useAuth } from "contexts/AuthProvider";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "services/auth";
import { showError } from "utils/notifications";
import urls from "utils/urls";

const stepTitles = [
  "Choose your games",
  "Set your preferences",
  "Create your account",
];

function Register() {
  const history = useHistory();
  const { saveCurrentUser } = useAuth();

  const [stepInfo, setStepInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const { activeStep, prevStep, nextStep } = useSteps({
    initialStep: 0,
  });

  const createAccount = async () => {
    const { games, preferences, account } = stepInfo;

    try {
      setLoading(true);

      const token = await register(games, preferences, account);
      saveCurrentUser(token);

      history.replace(urls.home);
    } catch (e) {
      setLoading(false);
      showError(e.message);
    }
  };

  const updateStep = (key, values) => {
    const currStepInfo = { ...stepInfo };
    currStepInfo[key] = values;
    setStepInfo(currStepInfo);

    if (activeStep === steps.length - 1) {
      createAccount();
    } else {
      nextStep();
    }
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
    {
      label: "Preferences",
      content: (
        <PreferenceStep
          initialPrefs={{ ...stepInfo["preferences"] }}
          onPrev={() => prevStep()}
          onNext={updateStep}
        />
      ),
    },
    {
      label: "Account",
      content: (
        <AccountStep
          initialAccount={{ ...stepInfo["account"] }}
          onPrev={() => prevStep()}
          onNext={updateStep}
        />
      ),
    },
  ];

  return (
    <Flex height="100%" width="100%" padding="20px">
      {loading ? (
        <Center flex="1">
          <VStack spacing="20px">
            <Heading>Creating your account...</Heading>
            <Spinner speed="1.2s" color="primary" size="xl" />
          </VStack>
        </Center>
      ) : (
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
                    {stepTitles[activeStep]}
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
      )}
    </Flex>
  );
}

export default Register;
