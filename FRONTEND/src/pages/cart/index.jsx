import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Cart({ cartItems }) {
  const [total, setTotal] = useState(0);
  console.log("cartItems: ", cartItems);
  const data = useSelector((store) => store.login);
  console.log("data: ", data);

  const grandSum = () => {
    let sum = 0;

    for (let i = 0; i < cartItems.length; i++) {
      let a = cartItems[i].product.discountPrice;
      sum += cartItems[i].quantity * a;
    }

    setTotal(sum);
  };

  useEffect(() => {
    grandSum();
  }, [total]);

  if (cartItems.length === 0) {
    return (
      <Flex minH={"70vh"} align={"center"} justify={"center"}>
        <Heading>Cart Is Empty</Heading>
      </Flex>
    );
  } else {
    return (
      <Box px={"5rem"} mb={"2rem"} mt={"5rem"}>
        <Heading my={"2rem"} textAlign={"center"} textDecoration={"underline"}>
          CART
        </Heading>
        <Flex justify={"space-between"}>
          <Table
            variant="striped"
            colorScheme="teal"
            py={8}
            w={"67%"}
            border={"1px solid"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <Thead>
              <Tr bg={"#A0AEC0"}>
                <Th fontSize={"1.1rem"}>Image</Th>
                <Th fontSize={"1.1rem"}>Title</Th>
                <Th fontSize={"1.1rem"}>Quantity</Th>
                <Th fontSize={"1.1rem"}>Price</Th>
                <Th fontSize={"1.1rem"}>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartItems.map((item) => (
                <Tr key={item._id}>
                  <Td>
                    <Image
                      src={item.product.images[0].image_urls[0]}
                      bg={"#E2E8F0"}
                      borderRadius={"0.3rem"}
                      border={"1px solid grey"}
                    />
                  </Td>
                  <Td fontSize={"1.1rem"} fontWeight={"bold"} w={"25%"}>
                    {item.product.name}
                  </Td>
                  <Td fontSize={"1.1rem"} fontWeight={"bold"}>
                    ₹ {item.product.discountPrice}
                  </Td>
                  <Td>
                    <Box
                      display={"flex"}
                      gap={4}
                      align={"center"}
                      justify={"center"}
                    >
                      <Button border={"1px solid gray"}>-</Button>
                      <Flex
                        px={"1rem"}
                        border={"1px solid grey"}
                        borderRadius={"0.3rem"}
                        align={"center"}
                        bg={"#E2E8F0"}
                      >
                        {item.quantity}
                      </Flex>
                      <Button border={"1px solid gray"}>+</Button>
                    </Box>
                  </Td>
                  <Td>
                    <Button size="sm" colorScheme="red">
                      Remove
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Box
            w={"32%"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            border={"1px solid"}
            borderRadius={"0.5rem"}
            top={"10.3rem"}
            right={"2rem"}
            h={"80vh"}
            p={"1rem"}
            fontWeight={500}
            fontSize={"1.05rem"}
          >
            <Heading
              textAlign={"center"}
              size={"lg"}
              textDecoration={"underline"}
            >
              Price Details
            </Heading>
            <Flex justify={"space-between"} my={"1rem"}>
              <Text>Total Price: </Text>
              <Text>₹ {total}</Text>
            </Flex>
            <Box borderBottom={"1px solid"}></Box>
            <Flex justify={"space-between"} my={"1rem"}>
              <Text>Total Discount: </Text>
              <Text>₹ -50</Text>
            </Flex>
            <Box borderBottom={"1px solid"}></Box>
            <Flex justify={"space-between"} my={"1rem"}>
              <Text>Shipping Charge:</Text>
              <Text>₹ 100</Text>
            </Flex>
            <Box borderBottom={"1px solid"}></Box>
            <Flex justify={"space-between"} my={"1rem"}>
              <Text>Tax:</Text>
              <Text>₹ 250</Text>
            </Flex>
            <Box borderBottom={"1px solid"}></Box>
            <Flex justify={"space-between"} my={"1rem"} fontSize={"1.5rem"}>
              <Text>Order Total:</Text>
              <Text>₹ {total + 250 + 100 - 50}</Text>
            </Flex>
            <Box textAlign={"center"} mt={"2.5rem"} fontSize={"1rem"}>
              Clicking on Bellow Button To Placed Order
            </Box>
            <Box textAlign={"center"} mt={"2rem"}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="orange"
                variant="solid"
                size={"lg"}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                Proceed To Order
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  }
}

export async function getServerSideProps() {
  try {
    const res = await axios.get("https://baby-blue-clam-wear.cyclic.app/cart", {
      headers: {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTI4MTQyMjg5MTA3NmY4OWM0ZmY0MSIsImlhdCI6MTY3NzQxOTA0NCwiZXhwIjoxNjc3NDU1MDQ0fQ.BcxQTp5o9t-gdwtlt9wmV5Rf9j_X0HxVOyVoHsSjVgY",
      },
    });
    const cartItems = res.data;
    return { props: { cartItems } };
  } catch (error) {
    console.error(error);
    return { props: { cartItems: [] } };
  }
}
