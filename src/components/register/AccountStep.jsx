import { Flex, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { showError } from "utils/notifications";
import {
  validateAccountName,
  validateEmail,
  validatePassword,
} from "utils/validators";
import StepButtons from "./StepButtons";

function AccountStep({ initialAccount, onPrev, onNext }) {
  const [email, setEmail] = useState(initialAccount["email"] ?? "");
  const [username, setUsername] = useState(initialAccount["username"] ?? "");
  const [password, setPassword] = useState(initialAccount["password"] ?? "");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = () => {
    try {
      validateEmail(email);
      validateAccountName(username);
      validatePassword(password);

      if (password !== confirmPassword) {
        throw new Error("Please confirm the correct password.");
      }

      onNext("account", {
        email,
        username,
        password,
      });
    } catch (e) {
      showError(e.message);
    }
  };

  return (
    <Flex direction="column" justify="space-between" width="100%">
      <VStack
        flex="1"
        justify="center"
        align="stretch"
        paddingX={{ base: "50px", md: "160px" }}
        spacing="20px"
      >
        <VStack align="start">
          <Text>Email address</Text>
          <Input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </VStack>
        <VStack align="start">
          <Text>Username</Text>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </VStack>
        <VStack align="start">
          <Text>Password</Text>
          <Input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </VStack>
        <VStack align="start">
          <Text>Confirm Password</Text>
          <Input
            value={confirmPassword}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </VStack>
      </VStack>
      <StepButtons stepNumber={3} onPrev={onPrev} onNext={handleNext} />
    </Flex>
  );
}

export default AccountStep;
