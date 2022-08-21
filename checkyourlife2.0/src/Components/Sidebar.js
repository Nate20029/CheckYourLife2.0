/* eslint-disable react/react-in-jsx-scope */
import {
  Avatar, Flex, Text, Button,
} from '@chakra-ui/react';
import './Sidebar.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { useRouter } from 'next/router';
import { auth, db } from '../Services/firebase';
import getOtherEmail from './getOtherEmail';

export default function Sidebar() {
  const [user] = useAuthState(auth);
  const [snapshot] = useCollection(collection(db, 'chats'));
  const chat = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const router = useRouter();

  const redirect = (id) => {
    console.log(`esta es una prueba${id}`);
    router.push(`/chats/${id}`);
  };

  const chatExist = (email) => chat?.find((chats) => (
    chats.users.includes(user.email) && chat.users.includes(email)));

  const newChat = async () => {
    const input = prompt('Enter email of chat recipient');
    if (!chatExist(input) && (input !== user.email)) {
      await addDoc(collection(db, 'chats'), { users: [user.email, input] });
    }
  };

  const chatList = () => (
    chat?.filter((chats) => chats.users.includes(user.email))
      .map(
        (chats) => (
          <Flex className="usuarios" onClick={() => redirect(chats.id)}>
            <Avatar className="avatarchat" src="" />
            <Text>{getOtherEmail(chats.users, user)}</Text>
          </Flex>
        ),
      )
  );

  return (
    <Flex className="todo">
      <Flex className="arriba2">
        <Flex className="avatarflex">
          <Avatar className="avatar" src={user.photoURL} />
          <Text>{user.displayName || user.email}</Text>
        </Flex>
      </Flex>

      <Button className="button" onClick={() => newChat()}>New Chat</Button>

      <Flex className="chatflex">
        {chatList()}
      </Flex>

    </Flex>
  );
}
