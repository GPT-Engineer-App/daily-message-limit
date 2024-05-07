import React from "react";
import { Box, VStack, Text, Divider } from "@chakra-ui/react";

const Sidebar = () => {
  const conversations = ["Alice", "Bob", "Charlie"];

  return (
    <Box width="300px" height="100vh" bg="gray.200" p={4}>
      <Text fontSize="2xl" mb={4}>
        Conversations
      </Text>
      <VStack divider={<Divider />} spacing={4}>
        {conversations.map((name, index) => (
          <Text key={index} p={2} w="full" bg="white" borderRadius="md">
            {name}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
