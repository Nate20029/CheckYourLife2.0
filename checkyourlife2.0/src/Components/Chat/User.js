import {
  Avatar, Flex, Text,
} from '@chakra-ui/react';
// import Img from '../../Assets/Media/fotouser.jpg';
import '../../Assets/Styles/Chat/Sidebar.css';

function User({ user, selectUser }) {
  return (
    <Flex className="usuarios" onClick={() => selectUser(user)}>
      <Flex>
        <Flex>
          <Avatar src={user.photoURL} className="avatar" />
          <Text className="textusuarios">{user.displayName || user.email}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default User;
