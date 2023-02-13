import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const SortBy = () => {
  return (
    <Flex align={"center"} gap={1}>
      <Text fontWeight={500}>Sort By :</Text>
      <select
        style={{ fontWeight: "bold", p: "0.5rem" }}
        placeholder="Select option"
      >
        <option value="option1">Alphabetically, A-Z</option>
        <option value="option2">Alphabetically, Z-A</option>
        <option value="option3">Price, low to high</option>
        <option value="option3">Price, high to low</option>
      </select>
    </Flex>
  );
};

export default SortBy;
