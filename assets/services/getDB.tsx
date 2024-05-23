import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage' 

// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDaZX_aDk5ABx_VTdGbj7ucf7TmvA4zHmo",
    authDomain: "dogfeeder-dd675.firebaseapp.com",
    databaseURL: "https://dogfeeder-dd675-default-rtdb.firebaseio.com",
    projectId: "dogfeeder-dd675",
    storageBucket: "dogfeeder-dd675.appspot.com",
    messagingSenderId: "782444175838",
    appId: "1:782444175838:web:74ad90438b1d7ccd4e3d4f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


async function getDB() {
    return getFirestore(app);
}

export const FirebaseApp = app;
export default getDB;
export const storage = getStorage(app)

