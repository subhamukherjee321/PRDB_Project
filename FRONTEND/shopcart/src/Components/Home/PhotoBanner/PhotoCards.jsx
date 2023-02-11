import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const PhotoCards = ({ photo }) => {
  return (
    <Box mx={"10px"} overflow={"hidden"} _hover={{cursor: "pointer"}}>
      <Image
        src={photo}
        alt={"banner"}
      />
      <Text p={"0.3rem 0.5rem"} bg={"#181818"} textAlign={"center"} color={"white"}>EXPLORE NOW</Text>
    </Box>
  );
};

export default PhotoCards;
