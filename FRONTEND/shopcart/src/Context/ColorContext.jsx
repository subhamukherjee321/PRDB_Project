import { createContext } from "react";

export const ColorContext = createContext();

const ColorContextProvider = ({ children }) => {
    const colors = {
        primary: "#0EA9CC",
        secondary: "#F05925"
    };

  return <ColorContext.Provider value={{colors}}>{ children }</ColorContext.Provider>;
};

export default ColorContextProvider;
