import React from "react";
import { Box, Text, VStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
const messages = [
  { sender: "me", content: "Hello!" },
  { sender: "other", content: "Hi there!" },
  { sender: "me", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
];

function MessageHistory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMessage, setSelectedMessage] = React.useState("");

  const handleOpenModal = (content) => {
    setSelectedMessage(content);
    onOpen();
  };

  return (
    <Box w="100%" p={4} bg="gray.100" overflowY="auto" flex="1">
      <VStack spacing={2}>
        {messages.map((msg, index) => (
          <Box key={index} bg={msg.sender === "me" ? "blue.500" : "gray.300"} p={3} borderRadius="lg" alignSelf={msg.sender === "me" ? "flex-end" : "flex-start"} onClick={() => handleOpenModal(msg.content)}>
            <Text color={msg.sender === "me" ? "white" : "black"} isTruncated maxWidth="200px">
              {msg.content}
            </Text>
          </Box>
        ))}
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Message Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{selectedMessage}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default MessageHistory;
