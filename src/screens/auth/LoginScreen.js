import React, { useState, useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, TextInput, Text, useTheme } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import AuthForm from '../../components/AuthForm';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, googleSignIn } = useContext(AuthContext);
  const { theme } = useTheme();

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.title, { color: theme.colors.primary }]}>
        Khata Tracker
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.text }]}>
        Track your debts easily
      </Text>

      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleLogin}
        submitText="Login"
      />

      <Button
        mode="text"
        onPress={() => navigation.navigate('Register')}
        style={styles.linkButton}
        labelStyle={{ color: theme.colors.primary }}
      >
        Create an account
      </Button>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  linkButton: {
    marginTop: 16,
  },
});

export default LoginScreen;
