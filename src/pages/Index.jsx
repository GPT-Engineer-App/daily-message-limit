import React, { useState } from "react";
import { Container, Textarea, Button, Text, useToast, VStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import MessageHistory from "../components/MessageHistory";

const Index = () => {
  const [message, setMessage] = useState("");
  const [lastSent, setLastSent] = useState({});
  const toast = useToast();

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    const today = new Date().toDateString();
    if (message.length < 500) {
      toast({
        title: "Message too short.",
        description: "Your message needs to be at least 500 characters long.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (lastSent[today]) {
      toast({
        title: "Message already sent today.",
        description: "You can only send one message per day.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLastSent({ ...lastSent, [today]: true });
    setMessage("");

    toast({
      title: "Message sent!",
      description: "Your message has been successfully sent.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="full" padding={4} bg="gray.100" height="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <MessageHistory />
      <VStack spacing={4} align="stretch">
        <Textarea placeholder="Write your message here..." value={message} onChange={handleMessageChange} size="lg" height="200px" />
        <Button leftIcon={<FaPaperPlane />} colorScheme="blue" onClick={sendMessage} isDisabled={message.length < 500}>
          <Text mb={2} color={message.length < 500 ? "red.500" : "green.500"} opacity="0.8">
            {message.length}
          </Text>
          Send Message
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
