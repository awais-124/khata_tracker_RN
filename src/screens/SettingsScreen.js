import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Divider, Text } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { theme, themeName, changeTheme, themes: availableThemes } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <List.Section>
        <List.Subheader style={{ color: theme.colors.primary }}>
          Appearance
        </List.Subheader>
        {availableThemes.map(name => (
          <React.Fragment key={name}>
            <List.Item
              title={name.charAt(0).toUpperCase() + name.slice(1)}
              left={() => (
                <List.Icon color={theme.colors.primary} icon="palette" />
              )}
              right={() => name === themeName && <List.Icon icon="check" />}
              onPress={() => changeTheme(name)}
              titleStyle={{ color: theme.colors.text }}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SettingsScreen;
