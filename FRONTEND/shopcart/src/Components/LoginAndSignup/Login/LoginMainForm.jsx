import React, { useEffect, useState } from "react";

import {
  Box,
  Flex,
  FormControl,
  Text,
  FormLabel,
  Input,
  Button,
  Checkbox,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";

const LoginMainFrom = () => {
  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const handleChange = (e) => {
    let { type, value } = e.target;
    setLogindata({ ...loginData, [type]: value });
  };

  return (
    <FormControl w={"85%"} mb={{ base: "0.3rem", md: "0.", lg: "0.5rem" }}>
      <Flex justify={"space-between"} flexDirection={"column"}>
        <Box pt={{ base: "1rem", md: "1rem", lg: "0.5rem" }}>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}>
              Email Address
            </Text>
          </FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Enter A Email"
            bg={"transparent"}
            size={{ base: "sm", md: "md", lg: "md" }}
            value={loginData.email}
            onChange={handleChange}
          />
        </Box>

        <Box pt={{ base: "1rem", md: "1rem", lg: "1rem" }}>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}>
              Password
            </Text>
          </FormLabel>
          <InputGroup size="md" mb={"1.5rem"}>
            <Input
              pr="4.5rem"
              name="password1"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              bg={"transparent"}
              size={{ base: "sm", md: "md", lg: "md" }}
              value={loginData.password}
              onChange={handleChange}
            />
            <InputRightElement
              width="4.5rem"
              display={"flex"}
              align={"center"}
              justify={"center"}
            >
              <Button
                mt={"0.2rem"}
                onClick={handleClick}
                fontSize={"12px"}
                bg={"transparent"}
                colorScheme={"white"}
                color={"white"}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Flex align={"center"} pb={"1rem"}>
          <Text as="span" mr={"0.4rem"} fontSize={{ base: "0.8rem", md: "0.9rem", lg: "0.9rem" }}>
            Remember Me
          </Text>
          <Checkbox bg={"white"} border={"0.5px solid"} size={"sm"}></Checkbox>
        </Flex>

        <Box>
          <Button
            type="submit"
            w={"100%"}
            borderRadius={"1rem"}
            bg="teal"
            color="white"
            _hover={{
              bg: "#39B7FF",
              color: "white",
              border: "3px solid #39B7FF",
            }}
          >
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.1rem" }}>
              Log In
            </Text>
          </Button>
        </Box>
      </Flex>
    </FormControl>
  );
};

export default LoginMainFrom;