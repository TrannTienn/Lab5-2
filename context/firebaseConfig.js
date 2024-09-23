// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp7TyrAYdlQv6FFPP4nRR7vxVu1fsaktw",
  authDomain: "lab5-2-66a44.firebaseapp.com",
  projectId: "lab5-2-66a44",
  storageBucket: "lab5-2-66a44.appspot.com",
  messagingSenderId: "6649026346",
  appId: "1:6649026346:web:59574b53bd9559874a3053"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo dịch vụ xác thực với AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Khởi tạo Firestore
const db = getFirestore(app);

export { auth, db };