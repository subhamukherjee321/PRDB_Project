import { Box, Text } from "@chakra-ui/react";

import ContinueWith from "../../Components/LoginAndSignup/ContinueWith";
import FormHeading from "../../Components/LoginAndSignup/FormHeading";
import SocialMedia from "../../Components/LoginAndSignup/SocialMedia";
import SiteLogo from "../../Components/LoginAndSignup/SiteLogo";
import LinkLoginSignup from "../../Components/LoginAndSignup/LinkLoginSignup";
import LoginMainFrom from "../../Components/LoginAndSignup/Login/LoginMainForm";
import { useContext } from "react";
import { ColorContext } from "@/Context/ColorContext";

const LoginFrom = () => {
  const { colorStatus, colors } = useContext(ColorContext);

  return (
    <Box
      justify={"center"}
      align={"center"}
      pt="2rem"
      pb={{ base: "4rem", md: "6rem", lg: "3.8rem" }}
      backgroundImage="url('https://cdn.shopify.com/s/files/1/0057/8938/4802/files/deks_01_76dd96ef-4dc3-466c-944d-b4e38da8b839.jpg?v=1639986488')"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
      <SiteLogo />

      <Box
        w={{ base: "80%", md: "60%", lg: "35%" }}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        borderRadius="1rem"
        pb={"1rem"}
        bgColor={"rgba(128, 128, 128, 0.5)"}
        color={"white"}
      >
        <FormHeading title={"LOG IN"}/>

        <LoginMainFrom />

        <Box w={"10%"} align={"center"} color={"#8A8377"}>
          <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.1rem" }}>
            Or
          </Text>
        </Box>

        <LinkLoginSignup
          des={"New to ShopKart?"}
          link={"Create an account."}
          to={"/signup"}
        />
      </Box>
    </Box>
  );
};

export default LoginFrom;
