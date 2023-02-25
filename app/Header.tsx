import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      textAlign={{ base: "left", md: "left", lg: "center" }}
      pl = '15px'
      bg="#6B46C1"
      pt="90px"
      color="white"
      pb="150"
    >
      <Heading pb="10px"> Simple pricing for your business </Heading>
      <Text> Plans that are carefully crafted to suit your business. </Text>
    </Box>
  );
}
