import React, { createContext, useState, useEffect, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create the context
const ThemeContext = createContext();

// Create a custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Light and Dark themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
      paper: '#f4f6f8',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    background: {
      default: '#121212',
      paper: '#333333',
    },
  },
});

// Create a provider component that wraps your app and provides the theme context
export const ThemeProviderWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the saved theme from localStorage when the app initializes
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Save the selected theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
