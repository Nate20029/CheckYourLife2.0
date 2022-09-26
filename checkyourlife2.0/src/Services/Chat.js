import { getDoc, collection } from 'firebase/firestore';
import { auth, db } from './firebase';

export const getDataMessenger = async () => {
  const docRef = collection(db, 'usuarios');
  const docSnap = await getDoc(docRef);
  try {
    return (docSnap.data());
  } catch (error) {
    return error;
  }
};

/* export const selecUser = (user) => {
    setChat(user);
    console.log(user);

    const user2 = user.uid;
    // eslint-disable-next-line no-unsafe-optional-chaining
    const id = usuario?.uid > user2 ? `${usuario?.uid + user2}` : `${user2 + usuario?.uid}`;

    const msgsRef = collection(db, 'messages', id, 'chat');
    const q = query(msgsRef, orderBy('createdAt', 'asc'));

    onSnapshot(q, (querySnapshot) => {
      const msgss = [];
      querySnapshot.forEach((doc) => {
        msgss.push(doc.data());
      });
      setMsgs(msgss);
    });
  }; */

/*   export const handleSubmit = async (e) => {
    e.preventDefault();

    const user2 = chat.uid;
    const id = usuario?.uid > user2 ? `${usuario?.uid + user2}` : `${user2 + usuario?.uid}`;

    await addDoc(collection(db, 'messages', id, 'chat'), {
      text,
      from: usuario?.uid,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
    });
    setText('');
  };  */
