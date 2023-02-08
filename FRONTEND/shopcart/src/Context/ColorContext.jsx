import { createContext } from "react";

export const ColorContext = createContext();

const ColorContextProvider = ({ children }) => {
    const colors = {
        primary: "#F05925",
        secondary: "#0EA9CC"
    };

  return <ColorContext.Provider value={{colors}}>{ children }</ColorContext.Provider>;
};

export default ColorContextProvider;
