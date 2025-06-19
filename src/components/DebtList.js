import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import DebtCard from './DebtCard';
import LoadingIndicator from './LoadingIndicator';

const DebtList = ({ debts, onPressDebt, onDeleteDebt, onMarkPaid }) => {
  const { theme } = useTheme();

  if (!debts) {
    return <LoadingIndicator />;
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <FlatList
        data={debts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <DebtCard
            debt={item}
            onPress={() => onPressDebt && onPressDebt(item)}
            onDelete={() => onDeleteDebt && onDeleteDebt(item.id)}
            onMarkPaid={() => onMarkPaid && onMarkPaid(item.id)}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={[styles.emptyText, { color: theme.colors.text }]}>
            No debts found
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DebtList;
