import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();
const ThemeTooglerContext = React.createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}
export function useThemeToogler() {
  return useContext(ThemeTooglerContext);
}
export const ThemeProvider = ({ children }) => {
  const [themeDark, setThemeDark] = useState(true);
  function onToogleTheme() {
    setThemeDark(!themeDark);
  }
  return (
    <ThemeContext.Provider value={themeDark}>
      <ThemeTooglerContext.Provider value={onToogleTheme}>
        {children}
      </ThemeTooglerContext.Provider>
    </ThemeContext.Provider>
  );
};
