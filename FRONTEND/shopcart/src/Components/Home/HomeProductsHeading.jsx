import { Heading } from '@chakra-ui/react'
import React from 'react'

const HomeProductsHeading = ({text}) => {
  return (
    <Heading textAlign={"center"} as={"h3"} size={"lg"} px={"5rem"} mt={"2.5rem"} mb={"1.5rem"}>{text}</Heading>
  )
}

export default HomeProductsHeading
