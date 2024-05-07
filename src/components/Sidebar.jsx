import React, { useState } from "react";
import { Box, VStack, Text, Divider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";

const Sidebar = () => {
  const conversations = ["Alice", "Bob", "Charlie"];
  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);
  const profileModalOnClose = () => setProfileModalIsOpen(false);

  return (
    <Box width="300px" height="100vh" bg="gray.100" p={4}>
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
      <Modal isOpen={profileModalIsOpen} onClose={profileModalOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Your profile details here.</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Sidebar;
