import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  Text,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Button,
  InputRightElement,
  InputGroup,
  useToast,
  Select,
} from "@chakra-ui/react";
import countryNames from "@/Data/countryNames";

const SignupMainFrom = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [show, setShow] = React.useState(false);
  const toast = useToast();
  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  return (
    <FormControl w={"85%"}>
      <Flex justify={"space-between"} flexDirection={"column"} color={"white"}>
        {/* Name Input */}
        <Box>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}>
              Username
            </Text>
          </FormLabel>
          <Input
            type="text"
            name="username"
            placeholder="Enter A Username"
            bg={"transparent"}
            size={{ base: "sm", md: "md", lg: "md" }}
            value={signupData.name}
            onChange={handleChange}
          />
        </Box>

        {/* Email Address */}
        <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
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
            value={signupData.email}
            onChange={handleChange}
          />
        </Box>

        {/* First Password */}
        <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}>
              Password
            </Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              name="password"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              bg={"transparent"}
              size={{ base: "sm", md: "md", lg: "md" }}
              value={signupData.password}
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
                colorScheme={"transparent"}
                color={"white"}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        {/* Confirm Password */}
        <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}>
              Confirm Password
            </Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              name="password2"
              type={show ? "text" : "password"}
              placeholder="Re-Enter Password"
              bg={"transparent"}
              size={{ base: "sm", md: "md", lg: "md" }}
              value={signupData.password2}
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
                colorScheme={"transparent"}
                color={"white"}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box pt={{ base: "1.5rem", md: "1.5rem", lg: "1.3rem" }}>
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
              CREATE ACCOUNT
            </Text>
          </Button>
        </Box>
      </Flex>
    </FormControl>
  );
};

export default SignupMainFrom;
