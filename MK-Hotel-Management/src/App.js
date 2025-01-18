import React from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AuraRoutes from './components/auraRoutes/AuraRoutes';
import { ThemeProviderWrapper, useTheme } from './components/theme/ThemeContext';
// import { ThemeProvider, useTheme } from './context/ThemeContext';  

function App() {
  return (
    <ThemeProviderWrapper>
      <HashRouter>
        <Provider store={store}>
          <AppWithTheme />
        </Provider>
      </HashRouter>
    </ThemeProviderWrapper>
  );
}

// Separate component to access the theme
const AppWithTheme = () => {
  const { isDarkMode } = useTheme();  // Use the custom hook to access the theme state

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <AuraRoutes />
    </div>
  );
};

export default App;
