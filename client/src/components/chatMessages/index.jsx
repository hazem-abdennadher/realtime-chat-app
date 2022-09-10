import { useId } from 'react';
import { StyledChatMessages } from './styles';

const ChatMessages = ({ messages, selectedContact, scrollRef }) => {
  const id = useId();

  return (
    <StyledChatMessages>
      {messages.length === 0 && (
        <div className="no-messages">
          Say hello 👋 to
          <span>&nbsp;{selectedContact.username} &nbsp;</span>
        </div>
      )}
      {messages.length > 0 && (
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={id + index}
              className={`message ${message.from ? 'sent' : 'received'}`}
              ref={scrollRef}
            >
              <div className="content">
                <p>{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </StyledChatMessages>
  );
};

export default ChatMessages;
