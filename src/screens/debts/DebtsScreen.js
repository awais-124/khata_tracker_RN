import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DebtContext } from '../../context/DebtContext';
import DebtCard from '../../components/DebtCard';
import DebtSummary from '../../components/DebtSummary';
import DebtFilter from '../../components/DebtFilter';
import { Button } from 'react-native-paper';
import { theme } from '../../constants/theme';

const DebtsScreen = () => {
  const { debts, unpaidDebts, paidDebts, filterDebts } =
    useContext(DebtContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);
  const navigation = useNavigation();

  const handleFilter = () => {
    filterDebts(searchQuery, statusFilter);
  };

  return (
    <View style={styles.container}>
      <DebtSummary />
      <DebtFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onFilter={handleFilter}
      />
      <FlatList
        data={debts}
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
          <Text style={styles.emptyText}>No debts found</Text>
        }
      />
      <Button
        mode="contained"
        style={styles.addButton}
        onPress={() => navigation.navigate('AddEditDebt')}
      >
        Add New Debt
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: theme.colors.text,
  },
  addButton: {
    margin: 16,
    backgroundColor: theme.colors.primary,
  },
});

export default DebtsScreen;
