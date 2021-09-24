import {
  Avatar,
  Box,
  Flex,
  Stack,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import PreferenceTab from "components/profile/PreferenceTab";
import StatTab from "components/profile/StatTab";
import { useEffect, useState } from "react";
import { getUserProfile } from "services/auth";

function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getUserProfile()
      .then((profile) => setProfile(profile))
      .catch((e) => console.log(e.message));
  }, []);

  console.log(profile);

  return (
    <Flex height="100%" width="100%" padding="20px">
      <Stack
        direction={{ base: "column", md: "row" }}
        flexBasis="1000px"
        margin="auto"
        backgroundColor="surface.first"
        borderRadius="md"
        padding="20px"
      >
        <Stack
          direction={{ base: "row", md: "column" }}
          flex="1"
          align="center"
          backgroundColor="surface.second"
          padding="40px"
          borderRadius="md"
          spacing="20px"
        >
          <Avatar size="lg" />
          <VStack>
            <Text fontSize="2xl">Matthew</Text>
          </VStack>
        </Stack>
        <Tabs flex="4" variant="enclosed" isFitted>
          <TabList>
            <Tab>Game Stats</Tab>
            <Tab>Preferences</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box width="100%" height="500px" overflow="auto">
                <StatTab />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box width="100%" height="500px" overflow="auto">
                <PreferenceTab />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Flex>
  );
}

export default Profile;
