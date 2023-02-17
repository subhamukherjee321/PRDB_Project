import { useContext, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsCartCheck } from "@chakra-ui/icons";
import { ColorContext } from "@/Context/ColorContext";

const Cart = () => {
  const [cartHover, setCartHover] = useState(false);
  const { colors } = useContext(ColorContext);
  return (
    <Box>
      <Flex
        align={"center"}
        gap={2}
        cursor={"pointer"}
        _hover={{ color: colors.primary }}
        onMouseOver={() => setCartHover(true)}
        onMouseOut={() => setCartHover(false)}
        position={"relative"}
      >
        <BsCartCheck fontSize={"1.2rem"} fontWeight={600} />
        <Text>Cart</Text>
        {cartHover && (
          <Box
            right={-20}
            top={6}
            position={"absolute"}
            w={"400%"}
            borderRadius={"0.5rem"}
            backgroundColor={"white"}
            zIndex={"100"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            fontSize={"0.8rem"}
            fontWeight={"bold"}
            p={"0.7rem"}
            onMouseOver={() => setCartHover(true)}
            onMouseOut={() => setCartHover(false)}
            color={"black"}
          >
            <Flex justify={"space-between"} w={"95%"}>
              <Box>Order Summary</Box>
              <Box>0 Item</Box>
            </Flex>
            <Box
              textAlign={"center"}
              mt={"1rem"}
              color={"#FF6F61"}
              _hover={{ color: "#FF6900" }}
            >
              PROCEED TO CART
            </Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Cart;
