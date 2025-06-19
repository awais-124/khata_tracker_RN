import React, { createContext, useState, useContext } from 'react';
import { themes } from '../constants/theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const changeTheme = themeName => {
    setCurrentTheme(themeName);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[currentTheme],
        themeName: currentTheme,
        changeTheme,
        themes: Object.keys(themes),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
