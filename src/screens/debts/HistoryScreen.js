import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { DebtContext } from '../../context/DebtContext';
import DebtCard from '../../components/DebtCard';

const HistoryScreen = () => {
  const { paidDebts } = useContext(DebtContext);
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Paid Debts
      </Text>
      <FlatList
        data={paidDebts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <DebtCard
            debt={item}
            onPress={() =>
              navigation.navigate('DebtDetail', { debtId: item.id })
            }
          />
        )}
        ListEmptyComponent={
          <Text style={[styles.emptyText, { color: theme.colors.text }]}>
            No paid debts found
          </Text>
        }
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HistoryScreen;
