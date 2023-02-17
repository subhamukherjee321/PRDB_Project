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
import { AiFillStar, AiTwotoneThunderbolt } from "react-icons/ai";
import React, { useContext } from "react";

const Products = ({ products }) => {
  
  const { colors } = useContext(ColorContext);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} px={"5rem"}>
      {products &&
        products.slice(0, 8).map((item) => (
          <Box
            key={item.id}
            borderRadius={"0.7rem"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            bg={"#E3E3E3"}
          >
            <Flex mr={"1rem"} justify={"center"} borderRadius={"0.7rem 0.7rem 0 0"} overflow={"hidden"} py={"0.5rem"} position={"relative"}>
              <Image
                mt={"1.1rem"}
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
                w={"70%"}
              />
              <Flex position={"absolute"} left={0} bg={"#F7C20A"} p={"0.3rem 0.5rem"} align={"center"} gap={1}>
                <AiTwotoneThunderbolt fontWeight={"blod"} />
                <Text fontSize={"0.7rem"} fontWeight={"800"}>SUPER SAVER</Text>
              </Flex>
            </Flex>
            <Box p={"1rem"} borderRadius={"0.5rem"} bg={"white"} w={"95%"} m={"auto"} mb={"0.5rem"}>
              <Heading as={"h4"} fontSize={"1.2rem"}>
                {item.title}
              </Heading>
            <Flex justify={"space-between"} my={"0.7rem"} w={"70%"}>
              <Heading as={"h4"} fontSize={"1rem"}>
                ₹ {item.discount_price}
              </Heading>
              <Text color={"#38A169"}>{item.discount}% off</Text>
              <del style={{fontSize: "0.8rem"}}>₹ {item.price}</del>
            </Flex>
            <Text fontSize={"0.9rem"}>{item.description.substring(0, 30)}</Text>
            <Flex mt={"0.2rem"}>
              <Flex align={"center"}>
                {new Array(~~item.rating).fill(0).map((ele, i) => (
                  <AiFillStar color={"#38A169"} key={i} />
                ))}
              </Flex>
              <Text fontSize={"0.7rem"}>(120 reviews)</Text>
            </Flex>
            <Box mt={"0.5rem"}>
              <Button
                colorScheme="black"
                _hover={{ bg: "black", color: "#F7C20A" }}
                _active={{ bg: "#4A5568", color: "white" }}
                borderRadius={"0.3rem"}
                size={"sm"}
                w={"100%"}
                bg={"#F7C20A"}
                color={"black"}
                fontWeight={"bold"}
                fontSize={"1rem"}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
          </Box>
        ))}
    </Grid>
  );
};

export default Products;
