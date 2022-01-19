import React, {createContext} from "react";
import {GlobalStyles} from "../styles/GlobalStyles";
import { useLocalStorage } from "../services/LocalStorage";

interface ContextProps {
  theme: string
  setTheme: Function
}

export const ThemeContext = createContext<ContextProps>({
  theme: "",
  setTheme: () => null,
})

interface Props {
  children: React.ReactNode
}

export function ThemeProvider(props: Props): JSX.Element {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <GlobalStyles theme={theme} />
      {props.children}
    </ThemeContext.Provider>
  )
}