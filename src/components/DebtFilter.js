import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar, SegmentedButtons, useTheme } from 'react-native-paper';

const DebtFilter = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  onFilter,
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={[styles.search, { backgroundColor: theme.colors.surface }]}
        theme={{ colors: { text: theme.colors.text } }}
        onIconPress={onFilter}
        onSubmitEditing={onFilter}
      />
      <SegmentedButtons
        value={statusFilter}
        onValueChange={setStatusFilter}
        buttons={[
          {
            value: null,
            label: 'All',
            style: {
              backgroundColor:
                statusFilter === null
                  ? theme.colors.primary
                  : theme.colors.surface,
            },
            labelStyle: {
              color:
                statusFilter === null
                  ? theme.colors.onPrimary
                  : theme.colors.text,
            },
          },
          {
            value: 'unpaid',
            label: 'Unpaid',
            style: {
              backgroundColor:
                statusFilter === 'unpaid'
                  ? theme.colors.primary
                  : theme.colors.surface,
            },
            labelStyle: {
              color:
                statusFilter === 'unpaid'
                  ? theme.colors.onPrimary
                  : theme.colors.text,
            },
          },
          {
            value: 'paid',
            label: 'Paid',
            style: {
              backgroundColor:
                statusFilter === 'paid'
                  ? theme.colors.primary
                  : theme.colors.surface,
            },
            labelStyle: {
              color:
                statusFilter === 'paid'
                  ? theme.colors.onPrimary
                  : theme.colors.text,
            },
          },
        ]}
        style={styles.segmented}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  search: {
    marginBottom: 8,
  },
  segmented: {
    marginTop: 8,
  },
});

export default DebtFilter;
