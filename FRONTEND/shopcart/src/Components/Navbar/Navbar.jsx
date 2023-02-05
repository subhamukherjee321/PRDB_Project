import { Box, Grid, Flex, Image, Input, Button, Text } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useContext, useState } from "react";
import Logo from "../../Assets/Logo.png";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { ColorContext } from "@/Context/ColorContext";
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  const [cartHover, setCartHover] = useState(false);
  const [accountHover, setAccountHover] = useState(false);
  const { colors } = useContext(ColorContext);

  return (
    <Flex
      w={"100%"}
      px={"5rem"}
      py={"0.5rem"}
      justify={"space-between"}
      align={"center"}
      fontWeight={500}
    >
      <Flex w={"14%"}>
        <Image alt={"Logo"} src={Logo.src} w={"100%"} />
      </Flex>
      <Flex w={"35%"} justify={"space-between"} align={"center"}>
        <Flex align={"center"} font>
          <Menu position={"relative"}>
            <MenuButton bg={"white"} rightIcon={<ChevronDownIcon />}>
              Categories
              {/* <BiChevronDown
                cursor={"pointer"}
                fontSize={"1.5rem"}
                _hover={{ color: colors.primary }}
              /> */}
            </MenuButton>
            <MenuList position={"absolute"} zIndex={100}>
              <MenuItem _hover={{ color: colors.primary }}>Download</MenuItem>
              <MenuItem _hover={{ color: colors.primary }}>Create a Copy</MenuItem>
              <MenuItem _hover={{ color: colors.primary }}>Mark as Draft</MenuItem>
              <MenuItem _hover={{ color: colors.primary }}>Delete</MenuItem>
              <MenuItem _hover={{ color: colors.primary }}>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Text cursor={"pointer"} _hover={{ color: colors.primary }}>
          Deals
        </Text>
        <Text cursor={"pointer"} _hover={{ color: colors.primary }}>
          What&apos;s New
        </Text>
        <Text cursor={"pointer"} _hover={{ color: colors.primary }}>
          Delivery
        </Text>
      </Flex>
      <Flex w={"40%"} justify={"space-between"} align={"center"}>
        {/* Search Input */}
        <Search />
        <Flex
          align={"center"}
          gap={2}
          cursor={"pointer"}
          _hover={{ color: colors.primary }}
          onMouseOver={() => setAccountHover(true)}
          onMouseOut={() => setAccountHover(false)}
        >
          <MdOutlineManageAccounts fontSize={"1.2rem"} fontWeight={600} />
          <Text>Account</Text>
          {accountHover && (
            <Box
              minW={"7%"}
              position={"absolute"}
              p={"0.7rem"}
              backgroundColor={"white"}
              zIndex={"10"}
              top={"2.7rem"}
              fontSize={"0.95rem"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
              borderRadius={"0.3rem"}
              onMouseOver={() => setAccountHover(true)}
              onMouseOut={() => setAccountHover(false)}
              color={"black"}
            >
              <Box
                pb={"0.5rem"}
                borderBottom={"0.5px solid gray"}
                _hover={{ color: "#FF6900" }}
                fontSize={"1rem"}
              >
                Log In
              </Box>
              <Box _hover={{ color: "#FF6900" }}>Sign Up</Box>
            </Box>
          )}
        </Flex>
        {/* Cart Is Here */}
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
      </Flex>
    </Flex>
  );
};

export default Navbar;