import { Flex } from "@chakra-ui/react";
import { useAuth } from "contexts/AuthProvider";

function Navigation() {
  const { id } = useAuth();

  if (!id) {
    return null;
  }

  return (
    <Flex h="80px" borderBottom="solid black">
      Navigation
    </Flex>
  );
}

export default Navigation;
