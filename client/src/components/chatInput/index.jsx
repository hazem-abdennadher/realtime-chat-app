import { StyledChatInput } from './styles';
import Picker from 'emoji-picker-react';
import { AiOutlineSmile } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { useState } from 'react';

const ChatInput = ({ handleSendMessage }) => {
  const [msg, setMsg] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (e, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (e) => {
    e.preventDefault();
    if (msg.length > 0) {
      handleSendMessage(msg);
      setMsg('');
    }
  };
  return (
    <StyledChatInput>
      <form className="chat-input-container" onSubmit={(e) => sendChat(e)}>
        <input
          className="chat-input"
          type="text"
          placeholder="Message"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <div className="emoji-container">
          <AiOutlineSmile
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>

        <button type="submit" className="send-btn" onClick={(e) => sendChat(e)}>
          <FiSend />
        </button>
      </form>
    </StyledChatInput>
  );
};

export default ChatInput;
