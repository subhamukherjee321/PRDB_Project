import Footer from "@/Components/Footer";
import ColorModeToggle from "@/Components/Home/ColorModeToggle";
import Navbar from "@/Components/Navbar/Navbar";
import ColorContextProvider from "@/Context/ColorContext";
import store from "@/Redux/Store";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorContextProvider>
        <Provider store={store}>
        <ColorModeToggle />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        </Provider>
      </ColorContextProvider>
    </ChakraProvider>
  );
}
