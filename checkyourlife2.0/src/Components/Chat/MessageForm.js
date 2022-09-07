import { Flex } from '@chakra-ui/react';
// import Img from '../../Assets/Media/fotouser.jpg';
import '../../Assets/Styles/Chat/comunidad.css';

function MessageForm({ handleSubmit, text, setText }) {
  return (
    <form className="bottombar" onSubmit={handleSubmit}>
      <Flex>
        <input
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Flex>
      <Flex>
        <button type="submit"> send </button>
      </Flex>
    </form>
  );
}

export default MessageForm;
