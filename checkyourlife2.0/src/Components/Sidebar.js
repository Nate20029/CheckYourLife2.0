/* eslint-disable react/react-in-jsx-scope */
import {
  Avatar, Flex, Text, Button,
} from '@chakra-ui/react';
import './Sidebar.css';

function Chat() {
  return (
    <Flex className="usuarios">
      <Avatar className="avatarchat" src="" />
      <Text>user@gmail.com</Text>
    </Flex>
  );
}

export default function Sidebar() {
  return (
    <Flex className="todo">
      <Flex className="arriba2">
        <Flex className="avatarflex">
          <Avatar className="avatar" src="" />
          <Text> Albert Einsterin</Text>
        </Flex>
      </Flex>

      <Button className="button">New Chat</Button>

      <Flex className="chatflex">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </Flex>

    </Flex>
  );
}
