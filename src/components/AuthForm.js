import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';

const AuthForm = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  submitText,
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.form}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        theme={{ colors: { primary: theme.colors.primary } }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        style={styles.input}
        secureTextEntry
        theme={{ colors: { primary: theme.colors.primary } }}
      />
      <Button
        mode="contained"
        onPress={onSubmit}
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        labelStyle={{ color: theme.colors.onPrimary }}
      >
        {submitText}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});

export default AuthForm;
