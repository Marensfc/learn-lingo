import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAeXxA0XBIr73amkhCQYUcfu8Tm5c3zDs4',
  authDomain: 'learn-lingo-1f89d.firebaseapp.com',
  databaseURL:
    'https://learn-lingo-1f89d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learn-lingo-1f89d',
  storageBucket: 'learn-lingo-1f89d.appspot.com',
  messagingSenderId: '224855337152',
  appId: '1:224855337152:web:937e302632ed73d8a0e525',
  measurementId: 'G-GRKEC37XEZ',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
