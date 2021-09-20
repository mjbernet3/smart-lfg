import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Tooltip,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { countries, availableInterests, languages } from "utils/constants";
import { showError } from "utils/notifications";
import { validateAge, validatePersonality } from "utils/validators";
import StepButtons from "./StepButtons";

function PreferenceStep({ initialPrefs, onPrev, onNext }) {
  const [country, setCountry] = useState(
    initialPrefs["country"] ?? Object.keys(countries)[0]
  );

  const [language, setLanguage] = useState(
    initialPrefs["language"] ?? Object.keys(languages)[0]
  );

  const [age, setAge] = useState(
    initialPrefs["age"] ? initialPrefs["age"].toString() : ""
  );

  const [personality, setPersonality] = useState(
    initialPrefs["personality"] ?? ""
  );

  const [hasMic, setHasMic] = useState(initialPrefs["hasMic"] ? "yes" : "no");

  const [interests, setInterests] = useState(
    initialPrefs["interests"] ? new Set(initialPrefs["interests"]) : new Set()
  );

  const handleNext = () => {
    try {
      validateAge(age);

      const formattedPersonality = personality.toUpperCase().replace("-", "");
      validatePersonality(formattedPersonality);

      onNext("preferences", {
        country,
        language,
        age: parseInt(age),
        personality: formattedPersonality,
        hasMic: hasMic === "yes" ? true : false,
        interests: Array.from(interests),
      });
    } catch (e) {
      showError(e.message);
    }
  };

  const updateInterests = (interest) => {
    const currInterests = new Set(interests);

    if (currInterests.has(interest)) {
      currInterests.delete(interest);
    } else {
      currInterests.add(interest);
    }

    setInterests(currInterests);
  };

  return (
    <Flex direction="column" justify="space-between" width="100%">
      <VStack align="stretch" padding="20px" spacing="40px">
        <VStack align="stretch" spacing="30px">
          <VStack align="stretch">
            <Heading fontSize="lg" textAlign="left">
              General
            </Heading>
            <Divider />
          </VStack>
          <HStack spacing="20px">
            <VStack flex="1" align="start">
              <Text>Country</Text>
              <Select
                value={country}
                variant="filled"
                onChange={(e) => setCountry(e.target.value)}
              >
                {Object.entries(countries).map(([code, country]) => (
                  <option key={code} value={code}>
                    {country}
                  </option>
                ))}
              </Select>
            </VStack>
            <VStack flex="1" align="start">
              <Text>Language</Text>
              <Select
                value={language}
                variant="filled"
                onChange={(e) => setLanguage(e.target.value)}
              >
                {Object.entries(languages).map(([code, language]) => (
                  <option key={code} value={code}>
                    {language}
                  </option>
                ))}
              </Select>
            </VStack>
          </HStack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "30px", md: "20px" }}
          >
            <HStack flex="1" align="stretch" spacing="20px">
              <VStack flex="1" align="start">
                <Text>Age</Text>
                <Input value={age} onChange={(e) => setAge(e.target.value)} />
              </VStack>
              <VStack flex="1" align="start">
                <HStack>
                  <Text>Personality</Text>
                  <Tooltip
                    hasArrow
                    label="Visit 16personalities.com to learn more. (Optional but leads to best results)"
                  >
                    <InfoOutlineIcon />
                  </Tooltip>
                </HStack>
                <Input
                  placeholder="INTJ-A"
                  value={personality}
                  onChange={(e) => setPersonality(e.target.value)}
                />
              </VStack>
            </HStack>
            <VStack align="start" justify="space-between">
              <Text>Have a mic?</Text>
              <RadioGroup size="md" value={hasMic} onChange={setHasMic}>
                <HStack spacing="20px">
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </HStack>
              </RadioGroup>
            </VStack>
          </Stack>
        </VStack>
        <VStack align="stretch" spacing="30px">
          <VStack align="stretch">
            <Heading fontSize="lg" textAlign="left">
              Interests
            </Heading>
            <Divider />
          </VStack>
          <Wrap>
            {Object.entries(availableInterests).map(([interest, name]) => (
              <WrapItem key={interest}>
                <Box
                  backgroundColor={
                    interests.has(interest) ? "primary" : "surface.second"
                  }
                  padding="5px 15px"
                  borderRadius="3xl"
                  onClick={() => updateInterests(interest)}
                  _hover={{ cursor: "pointer" }}
                >
                  {name}
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
      </VStack>
      <StepButtons stepNumber={2} onPrev={onPrev} onNext={handleNext} />
    </Flex>
  );
}

export default PreferenceStep;
