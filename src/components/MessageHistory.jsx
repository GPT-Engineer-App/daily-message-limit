import { Box, Text } from "@chakra-ui/react";

function MessageHistory() {
  return (
    <Box w="full" p={4} bg="gray.100">
      <Text fontSize="lg" fontWeight="bold">
        Message History
      </Text>
      {}
    </Box>
  );
}

export default MessageHistory;
