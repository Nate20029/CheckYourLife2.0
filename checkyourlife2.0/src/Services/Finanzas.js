import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';

export const verifyDoc = async (user) => {
  // HQJuMK9irvNDhbM4GKdSL0IcNw72
  const docRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    const docData = {
      tasks: [
        {
          title: 'ejemplo',
          description: 'descripcion',
          expiration: [],
          important: true,
          completed: false,
        },
      ],
      ingresos: [

      ],
      gastos: [

      ],
    };
    await setDoc(docRef, docData);
  }
};

export const getDataIngresos = async (user) => {
  const docRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(docRef);
  try {
    return (docSnap.data()).ingresos;
  } catch (error) {
    return error;
  }
};

export const getDataGastos = async (user) => {
  const docRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(docRef);
  try {
    return (docSnap.data()).gastos;
  } catch (error) {
    return error;
  }
};

export const guardarDBGasto = (user, gasto) => {
  onAuthStateChanged(auth, () => {
    const docRef = doc(db, 'users', user.uid);
    updateDoc(docRef, {
      gastos: arrayUnion(gasto),
    });
  });
};

export const guardarDBIngreso = (user, ingreso) => {
  onAuthStateChanged(auth, () => {
    const docRef = doc(db, 'users', user.uid);
    updateDoc(docRef, {
      ingresos: arrayUnion(ingreso),
    });
  });
};
