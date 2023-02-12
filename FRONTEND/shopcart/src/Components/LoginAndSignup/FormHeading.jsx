import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const FormHeading = ({ title }) => {
  return (
    <Box w={"90%"} mb={"0.7rem"} align={"center"} color={"#81E6D2"}>
      <Heading fontSize={{ base: "1.5rem", md: "1.5rem", lg: "1.7rem" }}
      pt={{ base: "1rem", md: "1.7rem", lg: "2rem" }}>
        {title}
      </Heading>
    </Box>
  );
};

export default FormHeading;