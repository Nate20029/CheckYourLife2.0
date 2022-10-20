// Import the functions you need from the SDKs you need
/* istanbul ignore file */
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD83wCqPcEqQqCSIWeEpF83Xo_b2I3MYTs',
  authDomain: 'checkyourlife2.firebaseapp.com',
  projectId: 'checkyourlife2',
  storageBucket: 'checkyourlife2.appspot.com',
  messagingSenderId: '249155319123',
  appId: '1:249155319123:web:4047cd77b80360d67cdda6',
  measurementId: 'G-P3R9LMGEH6',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {
  console.log(user);
});
// const storage = getStorage();
const db = getFirestore();
export { auth };
export { db };
const storage = getStorage();

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

// Storage
// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, `${currentUser.uid}.png`);

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL });

  setLoading(false);
  alert('Uploaded file!');
}
