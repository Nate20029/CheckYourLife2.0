/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Avatar, Button, Text, Flex, Heading, Input, FormControl,
} from '@chakra-ui/react';
import '../Assets/Styles/Chat/comunidad.css';
import { collection, query, where, onSnapshot, addDoc, Timestamp, orderBy } from 'firebase/firestore';
import { db, auth } from '../firebase';
import User from '../Components/Chat/User';
import MessageForm from '../Components/Chat/MessageForm';
import Message from '../Components/Chat/Message';
import { getDataMessenger } from '../Services/Chat';

function Chat() {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState('');
  const [text, setText] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [mensajes, setMensajes] = useState([]);
  const user1 = auth.currentUser ? auth.currentUser.uid : null;
  const nombreuser = auth.currentUser;

  useEffect(() => {
    setMensajes(getDataMessenger());
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

  /*   const newChat = async () => {
    const input = prompt('Enter email of chat recipient');
    await addDoc(collection(db, 'usuarios'), { email: input });
  }; */

  const selecUser = (user) => {
    setChat(user);
    console.log(user);

    const user2 = user.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    const msgsRef = collection(db, 'messages', id, 'chat');
    const q = query(msgsRef, orderBy('createdAt', 'asc'));

    onSnapshot(q, (querySnapshot) => {
      const msgss = [];
      querySnapshot.forEach((doc) => {
        msgss.push(doc.data());
      });
      setMsgs(msgss);
    });
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
    user1
      ? (
        <Flex className="general">
          <Flex className="sidebar">
            <Flex>
              <Flex className="avatarflex">
                <Avatar className="avatar" src={nombreuser.photoURL} />
                <Text className="textusuarios">{nombreuser.displayName || nombreuser.email}</Text>
              </Flex>
            </Flex>

            <Button className="button" onClick={() => newChat()}>CHATS</Button>
            {users.map((user) => (
              <User key={user.uid} user={user} selectUser={selecUser} />
            ))}
          </Flex>
          <Flex className="mensajesflex">
            {chat ? (
              <>
                <Flex className="topbar">
                  <h3 className="nombreuser">{chat.email}</h3>
                </Flex>
                <Flex className="messagess">
                  {msgs.length
                    ? msgs.map((msg, i) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Message key={i} msg={msg} user1={user1} />
                    ))
                    : null}
                </Flex>
                <Flex className="abajo">
                  <MessageForm
                    handleSubmit={handleSubmit}
                    text={text}
                    setText={setText}
                  />
                </Flex>
              </>
            ) : (
              <Flex className="topbar">
                <h3 className="nombreuser"> Select a user to start conversation</h3>
              </Flex>
            )}
          </Flex>
        </Flex>
      )
      : null
  );
}

export default Chat;
