import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import FormHeading from "../Components/LoginAndSignup/FormHeading";
import LinkLoginSignup from "../Components/LoginAndSignup/LinkLoginSignup";
import SignupMainFrom from "../Components/LoginAndSignup/Signup/SignupMainForm";
import SiteLogo from "../Components/LoginAndSignup/SiteLogo";

const SignupForm = () => {
  return (
    <Box
    backgroundImage="url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/83f93ce0-b702-42b6-b000-c4c4c0639f55.__CR0,0,970,600_PT0_SX970_V1___.png')"
    backgroundRepeat="no-repeat"
    backgroundSize={"cover"}
    // bgColor="rgb(3,58,57)"
    // bg="linear-gradient(125deg, rgba(3,58,57,1) 0%, rgba(3,40,39,1) 44%, rgba(142,242,231,1) 100%, rgba(78,240,238,1) 100%)"
      justify={"center"}
      align={"center"}
      p={"0"}
      m={"0"}
      pt="2rem"
      pb={{ base: "4rem", md: "6rem", lg: "3rem" }}
    >
      <SiteLogo />
      <Box
        w={{ base: "80%", md: "50%", lg: "35%" }}
        bgColor={"rgba(128, 128, 128, 0.3)"}
        borderRadius="1rem"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        pb={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }}
      >
        <FormHeading title={"SIGN UP"} />
        <SignupMainFrom />
        <LinkLoginSignup
          des={"Already a member?"}
          link={"Sign in"}
          to={"/login"}
        />
      </Box>
    </Box>
  );
};

export default SignupForm;
