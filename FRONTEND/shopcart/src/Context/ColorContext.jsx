import { createContext, useState } from "react";

export const ColorContext = createContext();

const ColorContextProvider = ({ children }) => {
  const [colorStatus, setColorStatus] = useState(false);

    const colors = {
        primary: colorStatus ? "black" : "white",
        secondary: colorStatus ? "black" : "white"
        primary: "#F05925",
        secondary: "#0EA9CC"
    };

  return <ColorContext.Provider value={{colors, colorStatus, setColorStatus}}>{ children }</ColorContext.Provider>;
};

export default ColorContextProvider;
