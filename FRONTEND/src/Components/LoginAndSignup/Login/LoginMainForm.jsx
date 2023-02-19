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
import { useDispatch, useSelector } from "react-redux";
import { login, resetLogin } from "@/Redux/LoginRedux/Login.Actions";
import { useRouter } from "next/router";

const initState = {
  email: "",
  password: "",
};

const LoginMainFrom = () => {
  const [loginData, setLogindata] = useState(initState);

  const dispatch = useDispatch();
  const status = useSelector((store) => store.login);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const router = useRouter();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogindata({ ...loginData, [name]: value });
  };

  const handleSubmit = () => {
    let { email, password } = loginData;

    if (!email || !password) {
      toast({
        title: "Log In Failed",
        description: "Fill all the Credentials",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (!email.includes(".com")) {
      toast({
        title: "Log In Failed",
        description: "Enter A Valid Email",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (!email.includes("@")) {
      toast({
        title: "Log In Failed",
        description: "Enter A Valid Email",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (password.length < 5) {
      toast({
        title: "Log In Failed",
        description: "Password Should Contains Minimum 5 Characters",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      dispatch(login(loginData));
    }
  };

  useEffect(() => {
    if (status.isError) {
      toast({
        title: "Log In Failed",
        description: status.message,
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
      if (status.message !== "Wrong Credential") {
        setLogindata(initState);
      }
      if (
        status.message ===
        "You Don't Have Any Acount First Create An Account Then Login"
      ) {
        setTimeout(() => {
          router.push("/signup");
        }, 2000);
      }
    } else if (status.isAuth) {
      setLogindata(initState);
      toast({
        title: "Log In Success",
        description: status.message,
        status: "success",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
    dispatch(resetLogin());
  }, [toast, status.isError, status.message]);

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
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              name="password"
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
                colorScheme={"transparent"}
                color={"white"}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Flex align={"center"} pb={"1rem"}>
          <Text
            as="span"
            mr={"0.4rem"}
            fontSize={{ base: "0.8rem", md: "0.9rem", lg: "0.9rem" }}
          >
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
            onClick={handleSubmit}
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
