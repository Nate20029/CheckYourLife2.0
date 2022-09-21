// import { Flex } from '@chakra-ui/react';
// import Img from '../../Assets/Media/fotouser.jpg';
import '../../Assets/Styles/Chat/comunidad.css';
import Moment from 'react-moment';

function Message({ msg, user1 }) {
  return (

    <div className={`message_wrapper ${msg.from === user1 ? 'own' : ''}`}>
      <p className={msg.from === user1 ? 'me' : 'friend'}>
        {msg.text}
        <br />
        <small>
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
      </p>
    </div>

  );
}

export default Message;
