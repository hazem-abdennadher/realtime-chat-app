import Logout from '../logout';
import { StyledChatHeader } from './styles';

const ChatHeader = ({ selectedContact, user, disconnect, connectedUsers }) => {
  return (
    <StyledChatHeader>
      <div className="contact">
        <div
          className={`chat-header-img ${
            connectedUsers.includes(selectedContact._id) ? 'online' : ''
          }`}
        >
          <img
            src={`data:image/svg+xml;base64,${selectedContact.avatarImage}`}
            alt="avatar"
          />
        </div>
        <h1 className="chat-header-username">{selectedContact.username}</h1>
      </div>
      <Logout user={user} disconnect={disconnect} />
    </StyledChatHeader>
  );
};

export default ChatHeader;
