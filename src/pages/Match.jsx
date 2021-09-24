import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import MatchUserCard from "components/match/MatchUserCard";
import Message from "components/match/Message";
import MessageInput from "components/match/MessageInput";
import { useEffect, useRef, useState } from "react";

function Match() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text) => {
    const message = {
      isMine: true,
      userId: 1,
      text,
    };

    setMessages([...messages, message]);
  };

  return (
    <Flex height="100%" width="100%" padding="20px">
      <VStack align="stretch" flexBasis="800px" margin="auto">
        <HStack>
          <Box display={{ base: "none", md: "flex" }} flex="1">
            <MatchUserCard />
          </Box>
          <Box display="flex" flex="1">
            <MatchUserCard />
          </Box>
        </HStack>
        <Flex
          backgroundColor="surface.first"
          direction="column"
          padding="20px"
          borderRadius="md"
        >
          <VStack align="stretch" height="500px" overflow="auto">
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
            <Box ref={messagesEndRef} />
          </VStack>
          <MessageInput onSend={(message) => sendMessage(message)} />
        </Flex>
      </VStack>
    </Flex>
  );
}

export default Match;
