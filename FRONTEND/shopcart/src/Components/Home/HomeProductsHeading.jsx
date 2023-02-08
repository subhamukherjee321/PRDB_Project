import { Heading } from '@chakra-ui/react'
import React from 'react'

const HomeProductsHeading = ({text}) => {
  return (
    <Heading as={"h3"} size={"lg"} px={"5rem"} my={"2.5rem"}>{text}</Heading>
  )
}

export default HomeProductsHeading