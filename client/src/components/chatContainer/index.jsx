import ChatHeader from '../chatHeader';
import ChatInput from '../chatInput';
import ChatMessages from '../chatMessages';
import { StyledChatContainer } from './styles';
import axios from 'axios';
import { addMessageRoute, getMessagesRoute } from '../../utils/APIRoutes';
import { useEffect, useRef, useState } from 'react';
const ChatContainer = ({
  selectedContact,
  user,
  socket,
  disconnect,
  connectedUsers,
}) => {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();
  useEffect(() => {
    const getMessages = async () => {
      const com = {
        from: user._id,
        to: selectedContact._id,
      };
      const { data } = await axios.post(getMessagesRoute, com);
      setMessages(data.messages);
    };
    getMessages();
  }, [selectedContact, user]);

  const handleSendMessage = async (msg) => {
    const message = {
      from: user._id,
      to: selectedContact._id,
      message: msg,
    };
    await axios.post(addMessageRoute, message);
    socket.current.emit('send-msg', message);
    const msgs = [...messages];
    msgs.push({ from: true, message: msg });
    setMessages(msgs);
  };
  useEffect(() => {
    if (socket.current) {
      socket.current.on('msg-recieve', (msg) => {
        setArrivalMessage({ from: false, message: msg });
      });
    }
  }, []);
  useEffect(() => {
    if (arrivalMessage) {
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: 'smooth' });
  }, [messages]);

  return (
    <StyledChatContainer ref={scrollRef}>
      <ChatHeader
        connectedUsers={connectedUsers}
        selectedContact={selectedContact}
        user={user}
        disconnect={disconnect}
      />
      <ChatMessages
        messages={messages}
        selectedContact={selectedContact}
        scrollRef={scrollRef}
      />
      <ChatInput
        selectedContact={selectedContact}
        handleSendMessage={handleSendMessage}
      />
    </StyledChatContainer>
  );
};

export default ChatContainer;
