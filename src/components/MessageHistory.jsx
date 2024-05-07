import { Box, Text, VStack } from "@chakra-ui/react";
const messages = [
  { sender: "me", content: "Hello!" },
  { sender: "other", content: "Hi there!" },
];

function MessageHistory() {
  return (
    <Box w="100%" p={4} bg="gray.100" overflowY="auto" flex="1">
      <VStack spacing={2}>
        {messages.map((msg, index) => (
          <Box key={index} bg={msg.sender === "me" ? "blue.500" : "gray.300"} p={3} borderRadius="lg" alignSelf={msg.sender === "me" ? "flex-end" : "flex-start"}>
            <Text color={msg.sender === "me" ? "white" : "black"}>{msg.content}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default MessageHistory;
