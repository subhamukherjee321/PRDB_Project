import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Logo from "../../Assets/Logo2.png";

const SiteLogo = () => {
  return (
    <Box
      w="15rem"
      mb="3rem"
      py={"0.3rem"}
      px={"0.8rem"}    
      borderRadius={"0.5rem"}
    >
      <Link href={"/"}>
        <Image src={Logo.src} w="100%" alt="WeFitLogo" />
      </Link>
    </Box>
  );
};

export default SiteLogo;
