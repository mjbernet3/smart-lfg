import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Avatar,
  HStack,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import UserProfileItem from "./UserProfileItem";

function MatchUserCard() {
  const [isOpen, setOpen] = useState(false);

  // TODO: Remove this once actual user is available
  const user = {
    country: "United States",
    language: "English",
    age: 22,
    hasMic: true,
    personality: "INTJ",
    interests: [
      "first",
      "second",
      "third",
      "first",
      "second",
      "third",
      "first",
      "second",
      "third",
      "first",
      "second",
      "third",
    ],
  };

  return (
    <Popover isOpen={isOpen} onClose={() => setOpen(false)} closeOnBlur={false}>
      <PopoverTrigger>
        <HStack
          flex="1"
          justify="space-between"
          align="start"
          backgroundColor="surface.second"
          padding="20px 40px"
          borderRadius="md"
        >
          <HStack spacing="40px">
            <Avatar name="Matthew" size="lg" />
            <VStack align="start">
              <Text fontSize="2xl" textTransform="capitalize">
                Matthew
              </Text>
              <UserProfileItem name="Gamertag" value="Excel" />
            </VStack>
          </HStack>
          <IconButton onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <ChevronUpIcon width="25px" height="25px" />
            ) : (
              <ChevronDownIcon width="25px" height="25px" />
            )}
          </IconButton>
        </HStack>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <VStack align="stretch" paddingX="15px">
            <UserProfileItem name="Country" value={user.country} />
            <UserProfileItem name="Language" value={user.language} />
            <UserProfileItem name="Age" value={user.age} />
            <UserProfileItem
              name="Microphone"
              value={user.hasMic ? "Yes" : "No"}
            />
            <UserProfileItem name="Personality" value={user.personality} />
            <UserProfileItem
              name="Interests"
              value={user.interests.join(", ")}
            />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default MatchUserCard;
