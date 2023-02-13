import Footer from "@/Components/Footer";
import ColorModeToggle from "@/Components/Home/ColorModeToggle";
import Navbar from "@/Components/Navbar/Navbar";
import ColorContextProvider from "@/Context/ColorContext";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorContextProvider>
        <ColorModeToggle />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ColorContextProvider>
    </ChakraProvider>
  );
}
