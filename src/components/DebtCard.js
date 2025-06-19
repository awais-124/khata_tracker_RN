import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DebtCard = ({ debt, onPress, onDelete, onMarkPaid }) => {
  const { theme } = useTheme();
  const amountColor =
    debt.type === 'gave' ? theme.colors.error : theme.colors.primary;
  const iconName = debt.type === 'gave' ? 'arrow-upward' : 'arrow-downward';

  return (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <TouchableOpacity onPress={onPress}>
        <Card.Content>
          <View style={styles.header}>
            <Text style={[styles.person, { color: theme.colors.text }]}>
              {debt.person}
            </Text>
            <Text style={[styles.amount, { color: amountColor }]}>
              {debt.type === 'gave' ? '-' : '+'}₹{debt.amount.toFixed(2)}
            </Text>
          </View>
          <View style={styles.details}>
            <Icon name={iconName} size={16} color={theme.colors.disabled} />
            <Text style={[styles.date, { color: theme.colors.disabled }]}>
              {new Date(debt.date?.seconds * 1000).toLocaleDateString()}
            </Text>
            {debt.status === 'paid' && (
              <Icon
                name="check-circle"
                size={16}
                color={theme.colors.primary}
              />
            )}
          </View>
          {debt.notes && (
            <Text style={[styles.notes, { color: theme.colors.text }]}>
              {debt.notes}
            </Text>
          )}
        </Card.Content>
      </TouchableOpacity>
      {(onDelete || onMarkPaid) && (
        <Card.Actions>
          {debt.status !== 'paid' && onMarkPaid && (
            <Button onPress={onMarkPaid}>Mark Paid</Button>
          )}
          {onDelete && (
            <Button onPress={onDelete} color={theme.colors.error}>
              Delete
            </Button>
          )}
        </Card.Actions>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    marginHorizontal: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  person: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  date: {
    marginLeft: 4,
    fontSize: 14,
  },
  notes: {
    fontSize: 14,
  },
});

export default DebtCard;
