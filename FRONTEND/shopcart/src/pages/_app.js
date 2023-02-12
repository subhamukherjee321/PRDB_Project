import ColorModeToggle from "@/Components/Home/ColorModeToggle";
import ColorContextProvider from "@/Context/ColorContext";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorContextProvider>
        <ColorModeToggle />
        <Component {...pageProps} />
      </ColorContextProvider>
    </ChakraProvider>
  );
}
