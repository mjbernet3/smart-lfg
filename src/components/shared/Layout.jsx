import { Flex } from "@chakra-ui/react";
import Navigation from "components/shared/Navigation";

function Layout({ children }) {
  return (
    <Flex direction="column" height="100%" width="100%">
      <Navigation />
      <Flex flex="1" overflow="auto">
        {children}
      </Flex>
    </Flex>
  );
}

export default Layout;
