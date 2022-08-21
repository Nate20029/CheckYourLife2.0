/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Avatar, Button, Text, Flex, Heading, Input, FormControl,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import '../Components/comunidad.css';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from '@firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import Sidebar from '../Components/Sidebar';
import { db, auth } from '../Services/firebase';

function Bottombar() {
  return (
    <FormControl className="bottombar">
      <Input placeholder="Type a message..." autoComplete="off" />
      <Button type="submit" hidden> Submit</Button>
    </FormControl>
  );
}

function Topbar() {
  return (
    <Flex className="topbar">
      <Avatar className="avatarchatcom" src="" />
      <Heading size="lg">user1@gmail.com</Heading>
    </Flex>
  );
}

function Comunidad() {
  const router = useRouter();
  const { id } = router.query.id;

  const [user] = useAuthState(auth);

  const q = query(collection(db, `chats/${id}/messages`), orderBy('timestamp'));
  const [messages] = useCollectionData(q);

  const [chat] = useDocumentData(doc(db, 'chats', id));
  console.log(chat);

  const getMessages = () => messages?.map((msg) => {
    const sender = msg.sender === user.email;

    return (
      <Flex className="messagesr" alignSelf={sender ? 'flex-start' : 'flex-end'} backgroundColor={sender ? 'rgb(115, 186, 248)' : 'rgb(105, 227, 203)'}>
        <Text>{msg.text}</Text>
      </Flex>
    );
  });

  return (
    <Flex className="general">

      <Sidebar />

      <Flex className="mensajesflex">
        <Topbar />

        <Flex className="chatarea">

          <Flex className="messagess">
            <Text>This is a dummy message</Text>
          </Flex>

        </Flex>

        <Bottombar />
      </Flex>
    </Flex>
  );
}

export default Comunidad;
