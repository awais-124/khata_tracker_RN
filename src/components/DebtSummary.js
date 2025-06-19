import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import { DebtContext } from '../context/DebtContext';

const DebtSummary = () => {
  const { unpaidDebts, paidDebts } = useContext(DebtContext);
  const { theme } = useTheme();

  const totalBalance = unpaidDebts.reduce((sum, debt) => {
    return debt.type === 'gave' ? sum - debt.amount : sum + debt.amount;
  }, 0);

  return (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <Card.Content>
        <Text style={[styles.label, { color: theme.colors.text }]}>
          Total Balance
        </Text>
        <Text
          style={[
            styles.balance,
            {
              color:
                totalBalance >= 0 ? theme.colors.primary : theme.colors.error,
            },
          ]}
        >
          {totalBalance >= 0 ? '+' : ''}₹{Math.abs(totalBalance).toFixed(2)}
        </Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={[styles.statLabel, { color: theme.colors.text }]}>
              Unpaid
            </Text>
            <Text style={[styles.statValue, { color: theme.colors.text }]}>
              {unpaidDebts.length}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statLabel, { color: theme.colors.text }]}>
              Paid
            </Text>
            <Text style={[styles.statValue, { color: theme.colors.text }]}>
              {paidDebts.length}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
  },
  balance: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DebtSummary;
