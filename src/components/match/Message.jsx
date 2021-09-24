import { Box, Flex } from "@chakra-ui/react";

function Message({ message }) {
  const { isMine, text } = message;

  return (
    <Flex justify={isMine ? "flex-end" : "flex-start"}>
      <Box
        backgroundColor={isMine ? "primary" : "surface.second"}
        maxWidth="300px"
        padding="8px 20px"
        borderRadius="lg"
      >
        {text}
      </Box>
    </Flex>
  );
}

export default Message;
