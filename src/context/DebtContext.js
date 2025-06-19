import React, { createContext, useState, useEffect, useContext } from 'react';
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../services/firebase';
import { AuthContext } from './AuthContext';

export const DebtContext = createContext();

export const DebtProvider = ({ children }) => {
  const [debts, setDebts] = useState([]);
  const [filteredDebts, setFilteredDebts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'debts'),
      where('userId', '==', user.uid),
      orderBy('date', 'desc'),
    );

    const unsubscribe = onSnapshot(q, querySnapshot => {
      const debtsData = [];
      querySnapshot.forEach(doc => {
        debtsData.push({ id: doc.id, ...doc.data() });
      });
      setDebts(debtsData);
      setFilteredDebts(debtsData);
    });

    return unsubscribe;
  }, [user]);

  const addDebt = async debt => {
    try {
      await addDoc(collection(db, 'debts'), {
        ...debt,
        userId: user.uid,
        status: 'unpaid',
        date: new Date(),
      });
    } catch (error) {
      throw error;
    }
  };

  const updateDebt = async (id, debt) => {
    try {
      await updateDoc(doc(db, 'debts', id), debt);
    } catch (error) {
      throw error;
    }
  };

  const deleteDebt = async id => {
    try {
      await deleteDoc(doc(db, 'debts', id));
    } catch (error) {
      throw error;
    }
  };

  const markAsPaid = async id => {
    try {
      await updateDoc(doc(db, 'debts', id), { status: 'paid' });
    } catch (error) {
      throw error;
    }
  };

  const filterDebts = (searchQuery, statusFilter) => {
    let filtered = debts;
    if (searchQuery) {
      filtered = filtered.filter(
        debt =>
          debt.person.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (debt.notes &&
            debt.notes.toLowerCase().includes(searchQuery.toLowerCase())),
      );
    }
    if (statusFilter) {
      filtered = filtered.filter(debt => debt.status === statusFilter);
    }
    setFilteredDebts(filtered);
  };

  return (
    <DebtContext.Provider
      value={{
        debts: filteredDebts,
        unpaidDebts: debts.filter(d => d.status === 'unpaid'),
        paidDebts: debts.filter(d => d.status === 'paid'),
        addDebt,
        updateDebt,
        deleteDebt,
        markAsPaid,
        filterDebts,
      }}
    >
      {children}
    </DebtContext.Provider>
  );
};
