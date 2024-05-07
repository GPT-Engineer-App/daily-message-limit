import React, { useState } from "react";
import { Box, VStack, Text, Divider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  const conversations = ["Alice", "Bob", "Charlie"];
  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);
  const profileModalOnClose = () => setProfileModalIsOpen(false);

  return (
    <Box width="300px" height="100vh" bg="gray.100" p={4} borderRight="1px" borderColor="gray.200">
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
      <Button mt={4} onClick={() => setProfileModalIsOpen(true)} bg="blue.500" color="white" p={3} borderRadius="full" w="full">
        <FaUser />
        <Text ml={2}>Fredrik</Text>
      </Button>
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
