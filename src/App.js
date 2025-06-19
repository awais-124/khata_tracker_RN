import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { DebtProvider } from './context/DebtContext';
import { ThemeProvider } from './context/ThemeContext';
import { PaperProvider } from 'react-native-paper';

import AppNavigator from './navigation/AppNavigator';

const PaperProviderWrapper = () => {
  const { theme } = useTheme();
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DebtProvider>
          <PaperProviderWrapper />
        </DebtProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
