/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Avatar, Button, Text, Flex, Heading, Input, FormControl,
} from '@chakra-ui/react';
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
      <Heading size="lg">gal20079@uvg.edu.gt</Heading>
    </Flex>
  );
}

function Comunidad() {
  return (
    <Flex className="general">

      <Sidebar />

      <Flex className="mensajesflex">
        <Topbar />

        <Flex className="chatarea">

          <Flex className="messagess">
            <Text>Que onda Kenny</Text>
          </Flex>
          <Flex className="messagess">
            <Text>Prueba :p</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>Ola ola</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>Probando</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>Hola</Text>
          </Flex>
          <Flex className="messagess">
            <Text>Buenas Tardes</Text>
          </Flex>
          <Flex className="messagess">
            <Text>Alguien aqui?</Text>
          </Flex>

        </Flex>

        <Bottombar />
      </Flex>
    </Flex>
  );
}

export default Comunidad;
