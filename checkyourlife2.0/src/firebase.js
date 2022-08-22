import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import {
  getDownloadURL, getStorage, ref, uploadBytes,
} from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8Vc2Cw2TFHfxooq-GlayNk-4kxPE8Qic',
  authDomain: 'check-your-life-8d160.firebaseapp.com',
  projectId: 'check-your-life-8d160',
  storageBucket: 'check-your-life-8d160.appspot.com',
  messagingSenderId: '829574262711',
  appId: '1:829574262711:web:3d178b998e283f66f84232',
  measurementId: 'G-24EYTZK046',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {
  // eslint-disable-next-line no-console
  console.log(user);
});
const storage = getStorage();
const db = getFirestore();

export { auth };
export { db };

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
export async function upload(file, currentUser) {
  // the storage itself
  const storageRef = ref(storage, `${currentUser.uid}image.jpg`); // how the image will be addressed inside the storage

  // convert image to array of bytes
  const img = await fetch(file);
  const bytes = await img.blob();

  await uploadBytes(storageRef, bytes); // upload images

  const photoURL = await getDownloadURL(storageRef, file);

  updateProfile(currentUser, { photoURL });

  // eslint-disable-next-line no-alert
  alert('file Uploaded');
}
