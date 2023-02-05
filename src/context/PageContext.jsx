import { createContext, useReducer } from "react";
import { initState, PageReducer } from "./PageReducer";

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PageReducer, initState);

  const toggleTheme = (theme) => {
    if (theme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" });
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" });
    }
  };

  return (
    <PageContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </PageContext.Provider>
  );
};
