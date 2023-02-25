import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import checkMarkIcon from "./icons/checkMarkIcon";

export default function Pricing() {
  return (
    <Box
      maxW="800px"
      mx = {{base: '10px', lg: 'auto'}}
      // ml={{base: '10px', lg: 'auto'}}
      // mr={{base: '10px', lg: 'auto'}}
      mt="-110px"
      bg="white"
      borderRadius="16px"
      overflow="hidden"
      boxShadow={
        "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        {/*left box*/}
        <Box bg="#c5b9dd" p="40px" textAlign={"center"}>
          <Text fontSize="20px" fontWeight={"bold"}>
            Premium PRO
          </Text>
          <Heading fontSize="40">$329</Heading>
          <Text fontSize="12px" pb="10px">
            billed just once
          </Text>
          <Button bg="#805AD5" color="white" fontSize="16px">
            Get Started
          </Button>
        </Box>

        {/*right box*/}
        <Box pt="40px" pl="20px" ml={"30px"}>
          <Text mb="10px">
            Access these features when you get this pricing package for your
            business.
          </Text>

          <HStack mb="10px">
            <Icon as={checkMarkIcon} />
            <Text>International calling and messaging API</Text>
          </HStack>

          <HStack mb="10px">
            <Icon as={checkMarkIcon} />
            <Text>Additional phone numbers</Text>
          </HStack>

          <HStack mb="5px">
            <Icon as={checkMarkIcon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>

          <HStack mb="5px">
            <Icon as={checkMarkIcon} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
