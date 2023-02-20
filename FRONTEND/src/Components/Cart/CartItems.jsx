import { Box, Container, Heading, Table, Thead, Tr, Th, Tbody, Td, Button } from '@chakra-ui/react';
import axios from 'axios';

export default function Cart({ cartItems }) {
  return (
    <Box py={8}>
      <Container maxW="container.lg">
        <Heading mb={4}>Your Cart</Heading>
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
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get('/api/cart'); // assuming you have an Express route to get the cart data
    const cartItems = res.data;
    return { props: { cartItems } };
  } catch (error) {
    console.error(error);
    return { props: { cartItems: [] } };
  }
}