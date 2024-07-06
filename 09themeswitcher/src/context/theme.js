// 2 file nu kam 1 ma compire 09 with 08
import { createContext, useContext } from "react";
//default create
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme : () =>{},
    lightTheme : () =>{}

})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}