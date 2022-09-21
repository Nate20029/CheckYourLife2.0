import { Flex } from '@chakra-ui/react';
// import Img from '../../Assets/Media/fotouser.jpg';
import '../../Assets/Styles/Chat/comunidad.css';

function MessageForm({ handleSubmit, text, setText }) {
  return (
    <form onSubmit={handleSubmit}>
      <Flex className="bottombar">
        <Flex>
          <input
            className="textomensaje"
            type="text"
            placeholder="Enter message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Flex>
        <Flex className="botonenviar">
          <button type="submit"> send </button>
        </Flex>
      </Flex>
    </form>
  );
}

export default MessageForm;
