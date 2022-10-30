import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const AppContext = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default AppContext;
