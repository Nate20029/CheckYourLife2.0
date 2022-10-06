import { getDoc, collection } from 'firebase/firestore';
import { auth, db } from './firebase';

export const getDataMessenger = async () => {
  const docRef = collection(db, 'usuarios');
  const docSnap = await getDoc(docRef);
};
