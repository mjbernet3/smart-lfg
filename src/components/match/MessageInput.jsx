import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    onSend(message);
    setMessage("");
  };

  const checkKey = (key) => {
    if (key === "Enter") {
      handleSend();
    }
  };

  return (
    <HStack backgroundColor="surface.first" spacing="10px" paddingTop="10px">
      <Input
        value={message}
        flex="1"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => checkKey(e.key)}
      />
      <Button onClick={handleSend} variant="primary">
        Send
      </Button>
    </HStack>
  );
}

export default MessageInput;
