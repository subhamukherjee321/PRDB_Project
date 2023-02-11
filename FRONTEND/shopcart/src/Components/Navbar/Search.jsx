import React, { useContext } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ColorContext } from "@/Context/ColorContext";

const Search = () => {
  const { colorStatus, colors } = useContext(ColorContext);
  return (
    <Flex bg={"#E2E8F0"} borderRadius={"1rem"} w={"60%"}>
      <Input
        placeholder="Search Product"
        borderRadius={"1rem"}
        size="sm"
        border={"none"}
        outline={"none"}
        focusBorderColor={"transparent"}
      />
      <Button bg={"#E2E8F0"} size="sm" borderRadius={"1rem"}>
        <SearchIcon color={"black"} _hover={{color: "green"}} />
      </Button>
    </Flex>
  );
};

export default Search;
