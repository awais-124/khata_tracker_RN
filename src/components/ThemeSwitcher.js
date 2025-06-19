import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, themeName, changeTheme, themes } = useTheme();

  return (
    <View style={styles.container}>
      {Object.keys(themes).map(name => (
        <Button
          key={name}
          mode={themeName === name ? 'contained' : 'outlined'}
          onPress={() => changeTheme(name)}
          style={styles.button}
          labelStyle={{
            color:
              themeName === name
                ? theme.colors.onPrimary
                : theme.colors.primary,
          }}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Button>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 16,
  },
  button: {
    margin: 4,
  },
});

export default ThemeSwitcher;
