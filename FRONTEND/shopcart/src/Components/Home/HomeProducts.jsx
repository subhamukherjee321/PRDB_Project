import { ColorContext } from "@/Context/ColorContext";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";

const HomeProducts = ({ products }) => {
  const { colors } = useContext(ColorContext);
  console.log("products: ", products);
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} px={"5rem"}>
      {products &&
        products.slice(0, 8).map((item) => (
          <Box
            key={item.id}
            borderRadius={"0.7rem"}
          >
            <Box bg={"#F6F6F6"} borderRadius={"0.7rem 0.7rem 0 0"} overflow={"hidden"}>
              <Image
                transition={"0.3s all ease-in-out"}
                _hover={{
                  transform: "scale(1.05)",
                  transformOrigin: "center",
                }}
                borderRadius={"0.7rem 0.7rem 0 0"}
                alt={item.primary_image}
                src={
                  "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144"
                }
                w={"100%"}
              />
            </Box>
            <Flex justify={"space-between"} my={"0.7rem"}>
              <Heading as={"h4"} fontSize={"1.1rem"}>
                {item.title}
              </Heading>
              <Heading as={"h4"} fontSize={"1rem"}>
                ₹{item.discount_price}
              </Heading>
            </Flex>
            <Text fontSize={"0.9rem"}>{item.description.substring(0, 30)}</Text>
            <Flex mt={"0.2rem"}>
              <Flex align={"center"}>
                {new Array(~~item.rating).fill(0).map((ele, i) => (
                  <AiFillStar color={"#38A169"} key={i} />
                ))}
              </Flex>
              <Text fontSize={"0.7rem"}>(120)</Text>
            </Flex>
            <Box mt={"0.5rem"}>
              <Button
                colorScheme="black"
                _hover={{ bg: "#013D29", color: "white" }}
                _active={{ bg: "#2F855A" }}
                borderRadius={"1rem"}
                size={"sm"}
                variant="outline"
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
    </Grid>
  );
};

export default HomeProducts;
