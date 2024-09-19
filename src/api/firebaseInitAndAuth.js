import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAeXxA0XBIr73amkhCQYUcfu8Tm5c3zDs4',
  authDomain: 'learn-lingo-1f89d.firebaseapp.com',
  projectId: 'learn-lingo-1f89d',
  storageBucket: 'learn-lingo-1f89d.appspot.com',
  messagingSenderId: '224855337152',
  appId: '1:224855337152:web:937e302632ed73d8a0e525',
  measurementId: 'G-GRKEC37XEZ',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
