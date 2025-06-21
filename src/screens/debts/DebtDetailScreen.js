import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DebtContext } from '../../context/DebtContext';
import { useTheme } from '../../context/ThemeContext';

const DebtDetailScreen = ({ route, navigation }) => {
  const { debtId } = route.params;
  const { debts, deleteDebt, markAsPaid } = useContext(DebtContext);
  const { theme } = useTheme();

  const debt = debts.find(d => d.id === debtId);

  if (!debt) {
    return (
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <Text>Debt not found</Text>
      </View>
    );
  }

  const handleDelete = async () => {
    try {
      await deleteDebt(debt.id);
      navigation.goBack();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleMarkPaid = async () => {
    try {
      await markAsPaid(debt.id);
      navigation.goBack();
    } catch (error) {
      alert(error.message);
    }
  };

  const amountColor =
    debt.type === 'gave' ? theme.colors.error : theme.colors.primary;

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <View style={styles.header}>
            <Text style={[styles.person, { color: theme.colors.text }]}>
              {debt.person}
            </Text>
            <Text style={[styles.amount, { color: amountColor }]}>
              {debt.type === 'gave' ? '-' : '+'}₹{debt.amount.toFixed(2)}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Icon
              name={debt.type === 'gave' ? 'arrow-upward' : 'arrow-downward'}
              size={20}
              color={theme.colors.text}
            />
            <Text style={[styles.detailText, { color: theme.colors.text }]}>
              {debt.type === 'gave' ? 'You gave money' : 'You took money'}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Icon name="event" size={20} color={theme.colors.text} />
            <Text style={[styles.detailText, { color: theme.colors.text }]}>
              {new Date(debt.date?.seconds * 1000).toLocaleDateString()}
            </Text>
          </View>

          {debt.status === 'paid' && (
            <View style={styles.detailRow}>
              <Icon
                name="check-circle"
                size={20}
                color={theme.colors.primary}
              />
              <Text
                style={[styles.detailText, { color: theme.colors.primary }]}
              >
                Paid
              </Text>
            </View>
          )}

          {debt.witness && (
            <View style={styles.detailRow}>
              <Icon name="person" size={20} color={theme.colors.text} />
              <Text style={[styles.detailText, { color: theme.colors.text }]}>
                Witness: {debt.witness}
              </Text>
            </View>
          )}

          {debt.notes && (
            <View style={styles.notesContainer}>
              <Text style={[styles.notesTitle, { color: theme.colors.text }]}>
                Notes:
              </Text>
              <Text style={[styles.notesText, { color: theme.colors.text }]}>
                {debt.notes}
              </Text>
            </View>
          )}
        </Card.Content>

        <Card.Actions style={styles.actions}>
          {debt.status !== 'paid' && (
            <Button
              mode="contained"
              onPress={handleMarkPaid}
              style={[
                styles.actionButton,
                { backgroundColor: theme.colors.primary },
              ]}
              labelStyle={{ color: theme.colors.onPrimary }}
            >
              Mark as Paid
            </Button>
          )}
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('AddEditDebt', { debt })}
            style={styles.actionButton}
            labelStyle={{ color: theme.colors.primary }}
          >
            Edit
          </Button>
          <Button
            mode="contained"
            onPress={handleDelete}
            style={[
              styles.actionButton,
              { backgroundColor: theme.colors.error },
            ]}
            labelStyle={{ color: theme.colors.onError }}
          >
            Delete
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  person: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 16,
  },
  notesContainer: {
    marginTop: 16,
  },
  notesTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notesText: {
    fontSize: 16,
  },
  actions: {
    justifyContent: 'space-between',
    padding: 16,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
  },
});

export default DebtDetailScreen;
