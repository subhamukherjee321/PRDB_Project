import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link";

const LinkLoginSignup = ({des, link, to}) => {
  return (
    <Box
        w={"37.5%"}
        mt={"0.7rem"}
        justify={"space-between"}
        align={"center"}
        style={{ fontWeight: "500" }}
        color={"white"}
      >
        
        <Text fontSize={{ base: "0.9rem", md: "1rem", lg: "1.1rem" }}>{des}</Text>
        <Text color={"#50B6FF"} textDecoration={"underline"} fontSize={{ base: "0.9rem", md: "1rem", lg: "1.1rem" }}>
          <Link href={to}>{link}</Link>
        </Text>
      </Box>
  )
}

export default LinkLoginSignup