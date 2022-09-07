/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Avatar, Button, Text, Flex, Heading, Input, FormControl,
} from '@chakra-ui/react';
import '../Assets/Styles/Chat/comunidad.css';
import { collection, query, where, onSnapshot, addDoc, Timestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
import User from '../Components/Chat/User';
import MessageForm from '../Components/Chat/MessageForm';

function Chat() {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState('');
  const [text, setText] = useState('');
  const user1 = auth.currentUser.uid;

  useEffect(() => {
    const usersRef = collection(db, 'usuarios');
    const q = query(usersRef, where('uid', 'not-in', [user1]));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const userss = [];
      querySnapshot.forEach((doc) => {
        userss.push(doc.data());
      });
      setUsers(userss);
    });
    return () => unsub();
  }, []);

  const selecUser = (user) => {
    setChat(user);
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user2 = chat.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    await addDoc(collection(db, 'messages', id, 'chat'), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
    });
    setText('');
  };
  return (
    <Flex className="general">
      <Flex className="todo">
        {users.map((user) => (
          <User key={user.uid} user={user} selectUser={selecUser} />
        ))}
      </Flex>
      <Flex>
        {chat ? (
          <>
            <Flex className="messages_user">
              <h3>{chat.name}</h3>
            </Flex>
            <MessageForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
            />
          </>
        ) : (
          <h3 className="no_conv"> Select a user to start conversation</h3>
        )}
      </Flex>
    </Flex>
  );
}

export default Chat;
