import React, { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Button,
  TextInput,
  RadioButton,
  Text,
  useTheme,
} from 'react-native-paper';
import { DebtContext } from '../../context/DebtContext';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddEditDebtScreen = ({ route, navigation }) => {
  const { addDebt, updateDebt } = useContext(DebtContext);
  const { theme } = useTheme();
  const { debt } = route.params || {};

  const [person, setPerson] = useState(debt?.person || '');
  const [amount, setAmount] = useState(debt?.amount?.toString() || '');
  const [type, setType] = useState(debt?.type || 'took');
  const [date, setDate] = useState(debt?.date?.toDate() || new Date());
  const [notes, setNotes] = useState(debt?.notes || '');
  const [witness, setWitness] = useState(debt?.witness || '');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = async () => {
    const debtData = {
      person,
      amount: parseFloat(amount),
      type,
      date,
      notes: notes || null,
      witness: witness || null,
    };

    try {
      if (debt) {
        await updateDebt(debt.id, debtData);
      } else {
        await addDebt(debtData);
      }
      navigation.goBack();
    } catch (error) {
      alert(error.message);
    }
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <TextInput
        label="Person Name"
        value={person}
        onChangeText={setPerson}
        style={styles.input}
        mode="outlined"
        theme={{ colors: { primary: theme.colors.primary } }}
      />

      <View style={styles.row}>
        <View style={styles.radioGroup}>
          <Text style={[styles.label, { color: theme.colors.text }]}>
            Transaction Type
          </Text>
          <RadioButton.Group onValueChange={setType} value={type}>
            <View style={styles.radioOption}>
              <RadioButton value="took" color={theme.colors.primary} />
              <Text style={{ color: theme.colors.text }}>I took money</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="gave" color={theme.colors.primary} />
              <Text style={{ color: theme.colors.text }}>I gave money</Text>
            </View>
          </RadioButton.Group>
        </View>

        <TextInput
          label="Amount"
          value={amount}
          onChangeText={setAmount}
          style={styles.amountInput}
          mode="outlined"
          keyboardType="numeric"
          theme={{ colors: { primary: theme.colors.primary } }}
        />
      </View>

      <TextInput
        label="Date"
        value={date.toLocaleDateString()}
        onFocus={() => setShowDatePicker(true)}
        style={styles.input}
        mode="outlined"
        theme={{ colors: { primary: theme.colors.primary } }}
      />

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      <TextInput
        label="Notes (Optional)"
        value={notes}
        onChangeText={setNotes}
        style={styles.input}
        mode="outlined"
        multiline
        numberOfLines={3}
        theme={{ colors: { primary: theme.colors.primary } }}
      />

      <TextInput
        label="Witness (Optional)"
        value={witness}
        onChangeText={setWitness}
        style={styles.input}
        mode="outlined"
        theme={{ colors: { primary: theme.colors.primary } }}
      />

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        labelStyle={{ color: theme.colors.onPrimary }}
      >
        {debt ? 'Update Debt' : 'Add Debt'}
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  radioGroup: {
    flex: 2,
    marginRight: 16,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginBottom: 8,
  },
  amountInput: {
    flex: 3,
  },
  button: {
    marginTop: 16,
  },
});

export default AddEditDebtScreen;
