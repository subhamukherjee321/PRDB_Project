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
import Logo from "../../Assets/Logo2.png";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { ColorContext } from "@/Context/ColorContext";
import Link from "next/link";
import Search from "./Search";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/Redux/LoginRedux/Login.Actions";

const Navbar = () => {
  const [cartHover, setCartHover] = useState(false);
  const [accountHover, setAccountHover] = useState(false);
  const { colorStatus, colors } = useContext(ColorContext);
  const { data } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Flex
      boxSizing="border-box"
      m={"0px"}
      boxShadow={!colorStatus && "0px 15px 10px -21px #111"}
      borderBottom={colorStatus && "1px solid"}
      borderColor={"gray"}
      w={"100%"}
      px={"5rem"}
      py={"0.5rem"}
      justify={"space-between"}
      align={"center"}
      fontWeight={500}
      bg={colors.secondary}
      position={"fixed"}
      top={"0px"}
      zIndex={40}
      display={
        router.asPath === "/login" || router.asPath === "/signup"
          ? "none"
          : "flex"
      }
    >
      <Flex w={"14%"}>
        <Link href={"/"}>
          <Image alt={"Logo"} src={Logo.src} w={"100%"} />
        </Link>
      </Flex>
      <Flex w={"31%"} justify={"space-between"} align={"center"}>
        <Flex align={"center"}>
          <Menu position={"relative"}>
            <MenuButton
              bg={"white"}
              _active={{ bg: "white" }}
              _hover={{ bg: "white" }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              <Text color={"black"}>Categories</Text>
            </MenuButton>
            <MenuList position={"absolute"} zIndex={100}>
              <MenuItem>Wireless</MenuItem>
              <MenuItem>With Wired</MenuItem>
              <MenuItem>Airpods</MenuItem>
              <MenuItem>Gaming</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Link href={"/products"}>
          <Text cursor={"pointer"} _hover={{ borderBottom: "1px solid" }}>
            All Heaphones
          </Text>
        </Link>
        <Flex align={"center"}>
          <Menu position={"relative"}>
            <MenuButton
              bg={"white"}
              _active={{ bg: "white" }}
              _hover={{ bg: "white" }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              <Text color={"black"}>Brands</Text>
            </MenuButton>
            <MenuList position={"absolute"} zIndex={100}>
              <MenuItem>Apple</MenuItem>
              <MenuItem>boAt</MenuItem>
              <MenuItem>Realme</MenuItem>
              <MenuItem>Cosmic Byte</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Flex w={"45%"} justify={"space-between"} align={"center"}>
        {/* Search Input */}
        <Search />

        {/* Wishlist */}
        <Flex
          align={"center"}
          gap={2}
          cursor={"pointer"}
          _hover={{ borderBottom: "1px solid" }}
        >
          <FaHeart />
          <Text>Wishlist</Text>
        </Flex>

        <Flex
          align={"center"}
          gap={2}
          cursor={"pointer"}
          onMouseOver={() => setAccountHover(true)}
          onMouseOut={() => setAccountHover(false)}
        >
          <MdOutlineManageAccounts fontSize={"1.2rem"} fontWeight={600} />
          <Text _hover={{ borderBottom: "1px solid black" }}>Account</Text>
          {accountHover && (
            <Box
              minW={"9%"}
              textAlign={"center"}
              position={"absolute"}
              p={"0.7rem"}
              backgroundColor={"white"}
              zIndex={"10"}
              top={"2.6rem"}
              fontSize={"0.95rem"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
              borderRadius={"0.3rem"}
              onMouseOver={() => setAccountHover(true)}
              onMouseOut={() => setAccountHover(false)}
              color={"black"}
            >
              {data.token ? (
                <>
                  <Link href={"#"}>
                    <Box
                      pb={"0.5rem"}
                      borderBottom={"0.5px solid gray"}
                      _hover={{ color: "#FF6900" }}
                      fontSize={"1rem"}
                    >
                      {data.username}
                    </Box>
                  </Link>
                  {data.seller && (
                    <Link href={"/addProducts"}>
                      <Box
                        pb={"0.5rem"}
                        borderBottom={"0.5px solid gray"}
                        _hover={{ color: "#FF6900" }}
                        fontSize={"1rem"}
                      >
                        Seller
                      </Box>
                    </Link>
                  )}
                  {data.admin && (
                    <Link href={"#"}>
                      <Box
                        pb={"0.5rem"}
                        borderBottom={"0.5px solid gray"}
                        _hover={{ color: "#FF6900" }}
                        fontSize={"1rem"}
                      >
                        Admin
                      </Box>
                    </Link>
                  )}
                  <Box _hover={{ color: "#FF6900" }} pt={"0.5rem"}>
                    <Button colorScheme={"red"} onClick={() => dispatch(logout())}>Logout</Button>
                  </Box>
                </>
              ) : (
                <>
                  <Link href={"/login"}>
                    <Box
                      pb={"0.5rem"}
                      borderBottom={"0.5px solid gray"}
                      _hover={{ color: "#FF6900" }}
                      fontSize={"1rem"}
                    >
                      Log In
                    </Box>
                  </Link>
                  <Link href={"/signup"}>
                    <Box _hover={{ color: "#FF6900" }}>Sign Up</Box>
                  </Link>
                </>
              )}
            </Box>
          )}
        </Flex>
        {/* Cart Is Here */}
        <Flex
          align={"center"}
          gap={2}
          _hover={{ borderBottom: "1px solid" }}
          onMouseOver={() => setCartHover(true)}
          onMouseOut={() => setCartHover(false)}
          position={"relative"}
        >
          <BsCartCheck
            cursor={"pointer"}
            fontSize={"1.2rem"}
            fontWeight={600}
          />
          <Text
            cursor={"pointer"}
            _hover={{ borderBottom: "1px solid transparent" }}
          >
            Cart
          </Text>
          {cartHover && (
            <Box
              right={-20}
              top={6}
              left={-20}
              position={"absolute"}
              w={"320%"}
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
              <Flex justify={"space-between"} w={"100%"}>
                <Box>Order Summary</Box>
                <Box>0 Item</Box>
              </Flex>
              <Link href={"/cart"}>
              <Box
                textAlign={"center"}
                mt={"1rem"}
                color={"#FF6F61"}
                _hover={{ color: "#FF6900" }}
                cursor={"pointer"}
              >
                PROCEED TO CART
              </Box>
              </Link>
            </Box>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
