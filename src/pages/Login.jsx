import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "contexts/AuthProvider";
import { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { login } from "services/auth";
import { showError } from "utils/notifications";
import urls from "utils/urls";
import { validateEmail, validatePassword } from "utils/validators";

function Login() {
  const { saveCurrentUser } = useAuth();
  const history = useHistory();

  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);

      validateEmail(email);
      validatePassword(password);

      const token = await login(email, password);
      saveCurrentUser(token);
      history.push(urls.home);
    } catch (error) {
      showError(error.message);
      setLoading(false);
    }
  };

  return (
    <Flex height="100%" width="100%" padding="20px">
      <VStack align="stretch" spacing="15px" flexBasis="450px" margin="auto">
        <Heading>Smart LFG</Heading>
        <Text>The best way to find other players like you.</Text>
        <VStack align="stretch">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon />
            </InputLeftElement>
            <Input
              value={email}
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LockIcon />
            </InputLeftElement>
            <Input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <Button onClick={handleSubmit} isDisabled={isLoading}>
            Log In
          </Button>
          <HStack justify="center">
            <Text>Need an account?</Text>
            <RouterLink to={urls.register}>
              <Link>Sign Up</Link>
            </RouterLink>
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default Login;
