export const verifyDoc = async (id) => {
  const docRef = doc(db, 'users', id);
  const docSnap = await getDoc(docRef);
  let docData = {};
  if (!docSnap.exists()) {
    docData = {
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
    return docData;
  }
  return docData;
};
