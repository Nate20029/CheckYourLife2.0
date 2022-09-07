import { Flex } from '@chakra-ui/react';
// import Img from '../../Assets/Media/fotouser.jpg';
import '../../Assets/Styles/Chat/comunidad.css';

function Message({ msg }) {
  return (

    <Flex>
      <p>
        {msg.text}
      </p>
    </Flex>

  );
}

export default Message;
