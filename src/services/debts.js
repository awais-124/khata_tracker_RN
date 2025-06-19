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
import { db } from './firebase';

export const getDebtsQuery = userId => {
  return query(
    collection(db, 'debts'),
    where('userId', '==', userId),
    orderBy('date', 'desc'),
  );
};

export const subscribeToDebts = (q, callback) => {
  return onSnapshot(q, querySnapshot => {
    const debts = [];
    querySnapshot.forEach(doc => {
      debts.push({ id: doc.id, ...doc.data() });
    });
    callback(debts);
  });
};

export const addDebt = async debt => {
  try {
    const docRef = await addDoc(collection(db, 'debts'), debt);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const updateDebt = async (id, updates) => {
  try {
    await updateDoc(doc(db, 'debts', id), updates);
  } catch (error) {
    throw error;
  }
};

export const deleteDebt = async id => {
  try {
    await deleteDoc(doc(db, 'debts', id));
  } catch (error) {
    throw error;
  }
};

export const markDebtAsPaid = async id => {
  try {
    await updateDoc(doc(db, 'debts', id), { status: 'paid' });
  } catch (error) {
    throw error;
  }
};
