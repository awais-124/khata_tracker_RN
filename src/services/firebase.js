import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC3eWo8Y8Wlspt6x61SAv4LheeH4keZLmA',
  authDomain: 'khata-tracker.firebaseapp.com',
  projectId: 'khata-tracker',
  storageBucket: 'khata-tracker.firebasestorage.app',
  messagingSenderId: '828400671833',
  appId: '1:828400671833:web:c989e0656a18e9a6dd6548',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
