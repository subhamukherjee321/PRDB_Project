import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const DareToLeap = () => {
  return (
    <Flex
      w={"100%"}
      px={"5rem"}
      justify={"space-between"}
      gap={5}
      color={"white"}
      mb={"3rem"}
    >
      <Box w={"35%"} bg={"#000000"} borderRadius={"1rem"}>
        <Heading mt={"3rem"} ml={"3rem"}>
          About ShopKart
        </Heading>
        <Text mt={"1rem"} ml={"3rem"} w={"75%"} fontWeight={500}>
          shopkart is a technology brand that specializes in providing
          technology products with a comprehensive superior experience for the
          youth
        </Text>
        <Flex
          align={"center"}
          mt={"6.6rem"}
          mb={"1.5rem"}
          ml={"3rem"}
          _hover={{ color: "#3182CE", cursor: "pointer" }}
        >
          <Text fontWeight={500}>View More</Text>
          <IoIosArrowForward />
        </Flex>
      </Box>
      <Box
        w={"65%"}
        bg={"black"}
        borderRadius={"1rem"}
        backgroundImage="url(https://image01.realme.net/general/20220920/1663638234748.jpg.webp)"
        backgroundSize={"contain"}
      >
        <Heading mt={"3rem"} ml={"3rem"}>
          Our Service
        </Heading>
        <Text mt={"1rem"} ml={"3rem"} w={"75%"} fontWeight={500}>
          shopkart provides our user with genuine, convenient, professional
          services, including consulting, upgrading, fixing, change and more.
        </Text>
        <Flex
          align={"center"}
          mt={"9.2rem"}
          mb={"1.5rem"}
          ml={"3rem"}
          _hover={{ color: "#3182CE", cursor: "pointer" }}
        >
          <Text fontWeight={500}>View More</Text>
          <IoIosArrowForward />
        </Flex>
      </Box>
    </Flex>
  );
};

export default DareToLeap;
