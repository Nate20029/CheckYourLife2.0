/* eslint-disable react/react-in-jsx-scope */
import {
  Avatar, Flex, Text, Button,
} from '@chakra-ui/react';
import './Sidebar.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { auth, db } from '../Services/firebase';
import getOtherEmail from './getOtherEmail';

export default function Sidebar() {
  const [user] = useAuthState(auth);
  const [snapshot] = useCollection(collection(db, 'chats'));
  const chat = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const redirect = (id) => {
    console.log(`esta es una prueba${id}`);
    const prueba = router.push(`Home/chats/${id}`);
    console.log(prueba);
  };

  const newChat = async () => {
    const input = prompt('Enter email of chat recipient');
    await addDoc(collection(db, 'chats'), { users: [user?.email, input] });
    console.log(user?.email);
  };

  const chatList = () => (
    chat?.filter((chats) => chats.users.includes(user?.email))
      .map(
        (chats) => (
          <Flex className="usuarios" onClick={() => redirect(chats.id)}>
            <Avatar className="avatarchat" src="" />
            <Text className="textusuarios">{getOtherEmail(chats.users, user)}</Text>
          </Flex>
        ),
      )
  );

  return (
    <Flex className="todo">
      <Flex className="arriba2">
        <Flex className="avatarflex">
          <Text className="textusuarios">{user?.displayName || user?.email}</Text>
        </Flex>
      </Flex>
      <Button className="button" onClick={() => newChat()}>New Chat</Button>
      <Flex className="chatflex">
        {chatList()}
      </Flex>

    </Flex>
  );
}
