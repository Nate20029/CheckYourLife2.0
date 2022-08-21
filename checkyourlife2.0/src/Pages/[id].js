/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Avatar, Button, Text, Flex, Heading, Input, FormControl,
} from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import '../Components/comunidad.css';

function Topbar() {
  return (
    <Flex className="topbar">
      <Avatar className="avatarchatcom" src="" />
      <Heading size="lg">user1@gmail.com</Heading>
    </Flex>
  );
}

function Bottombar() {
  return (
    <FormControl className="bottombar">
      <Input placeholder="Type a message..." autoComplete="off" />
      <Button type="submit" hidden> Submit</Button>
    </FormControl>
  );
}

function Comunidad() {
  const navigate = useNavigate();

  return (
    <Flex className="general">

      <Sidebar />

      <Flex className="mensajesflex">
        <Topbar />

        <Flex className="chatarea">

          <Flex className="messagesr">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>a</Text>
          </Flex>
          <Flex className="messagess">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>a</Text>
          </Flex>
          <Flex className="messagess">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>a</Text>
          </Flex>
          <Flex className="messagess">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>a</Text>
          </Flex>
          <Flex className="messagess">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>a</Text>
          </Flex>
          <Flex className="messagess">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>a</Text>
          </Flex>
          <Flex className="messagess">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>a</Text>
          </Flex>
          <Flex className="messagess">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>a</Text>
          </Flex>
          <Flex className="messagess">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex className="messagesr">
            <Text>a</Text>
          </Flex>
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
