import { ColorContext } from "@/Context/ColorContext";
import { Button, ButtonProps, Flex, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

export default function ColorModeToggle(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorStatus, setColorStatus } = useContext(ColorContext);
  const router = useRouter();

  const handleClick = () => {
    setColorStatus(!colorStatus);
    toggleColorMode();
  };

  return (
    /**
     * Ideally, only the button component should be used (without Flex).
     * Props compatible with <Button /> are supported.
     */
    <Flex
      position={"relative"}
      justifyContent="center"
      alignItems="center"
      display={
        router.asPath === "/login" || router.asPath === "/signup"
          ? "none"
          : "flex"
      }
    >
      <Button
        top={550}
        zIndex={2000}
        left={5}
        position={"fixed"}
        aria-label="Toggle Color Mode"
        onClick={handleClick}
        _focus={{ boxShadow: "none" }}
        w="fit-content"
        {...props}
      >
        {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  );
}
