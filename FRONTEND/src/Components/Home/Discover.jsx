import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";

const Discover = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" mx={"5rem"} gap={6}>
      <Box borderRadius={"1rem"} overflow={"hidden"}>
        <Image
          transition={"0.3s all ease-in-out"}
          _hover={{
            transform: "scale(1.05)",
            transformOrigin: "center",
          }}
          borderRadius={"1rem"}
          src={
            "https://image01.realme.net/general/20230131/1675166518424.png.webp"
          }
          alt={"poster1"}
        />
      </Box>
      <Box borderRadius={"1rem"} overflow={"hidden"}>
        <Image
          transition={"0.3s all ease-in-out"}
          _hover={{
            transform: "scale(1.05)",
            transformOrigin: "center",
          }}
          borderRadius={"1rem"}
          src={
            "https://image01.realme.net/general/20211217/1639723895956.png.webp"
          }
          alt={"poster1"}
        />
      </Box>
      <Box borderRadius={"1rem"} overflow={"hidden"}>
        <Image
          transition={"0.3s all ease-in-out"}
          _hover={{
            transform: "scale(1.05)",
            transformOrigin: "center",
          }}
          borderRadius={"1rem"}
          src={
            "https://image01.realme.net/general/20211231/1640957957650.jpg.webp"
          }
          alt={"poster1"}
        />
      </Box>
      <Box borderRadius={"1rem"} overflow={"hidden"}>
        <Image
          transition={"0.3s all ease-in-out"}
          _hover={{
            transform: "scale(1.05)",
            transformOrigin: "center",
          }}
          borderRadius={"1rem"}
          src={
            "https://image01.realme.net/general/20230203/1675412938170.png.webp"
          }
          alt={"poster1"}
        />
      </Box>
    </Grid>
  );
};

export default Discover;
