import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { DebtProvider } from './context/DebtContext';
import { ThemeProvider } from './context/ThemeContext';
import AppNavigator from './navigation/AppNavigator';
import { PaperProvider } from 'react-native-paper';
import { useTheme } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DebtProvider>
          <PaperProviderWrapper />
        </DebtProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

const PaperProviderWrapper = () => {
  const { theme } = useTheme();
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
