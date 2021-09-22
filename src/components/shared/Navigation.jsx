import {
  Avatar,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useAuth } from "contexts/AuthProvider";
import { Link } from "react-router-dom";
import urls from "utils/urls";

function Navigation() {
  const { id, removeCurrentUser } = useAuth();

  if (!id) {
    return null;
  }

  return (
    <Flex
      justify="space-between"
      align="center"
      backgroundColor="surface.second"
      padding="20px"
    >
      <Link to={urls.home} replace>
        <Heading fontSize="3xl" _hover={{ cursor: "pointer" }}>
          SMART LFG
        </Heading>
      </Link>
      <Menu>
        <MenuButton>
          <Avatar />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={removeCurrentUser}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Navigation;
