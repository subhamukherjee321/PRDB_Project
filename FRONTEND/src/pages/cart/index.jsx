import {
  Box,
  Container,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";

export default function Cart({ cartItems }) {
  console.log("cartItems: ", cartItems);
  return (
    <Box px={"5rem"} minH={"100vh"}>
      <Heading my={"2rem"} textAlign={"center"}>Cart</Heading>
      <Flex justify={"space-between"}>
        <Box py={8} w={"65%"} border={"1px solid"} minH={"80vh"}>
          <Container maxW="container.lg">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {cartItems.map((item) => (
                  <Tr key={item._id}>
                    <Td>{item.product.name}</Td>
                    <Td>${item.product.price}</Td>
                    <Td>{item.quantity}</Td>
                    <Td>
                      <Button size="sm" colorScheme="red">
                        Remove
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Button mt={4} colorScheme="blue">
              Checkout
            </Button>
          </Container>
        </Box>
        <Box w={"32%"} border={"1px solid red"} position={"fixed"} top={"10.3rem"} right={"2rem"} h={"80vh"}></Box>
      </Flex>
    </Box>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get("https://shopkart-backend.cyclic.app/cart", {
      headers: {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTI4MTQyMjg5MTA3NmY4OWM0ZmY0MSIsImlhdCI6MTY3NjgwMDUxMSwiZXhwIjoxNjc2ODM2NTExfQ.58XoMlq3dk3ynheBFjPCTELFuZa0xe7T1ZOal9uA_aQ",
      },
    });
    const cartItems = res.data;
    return { props: { cartItems } };
  } catch (error) {
    console.error(error);
    return { props: { cartItems: [] } };
  }
}
