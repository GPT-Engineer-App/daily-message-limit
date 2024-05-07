import { Box, Text, VStack } from "@chakra-ui/react";

function MessageHistory({ messages }) {
  return (
    <Box w="full" p={4} bg="gray.100" overflowY="auto" maxH="300px">
      <VStack spacing={4}>
        {messages.map((msg, index) => (
          <Box key={index} bg="blue.100" p={3} borderRadius="lg" alignSelf={msg.sender === "me" ? "flex-end" : "flex-start"}>
            <Text>{msg.content}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default MessageHistory;
