import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { allUsersRoute, host } from '../utils/APIRoutes';
import { ChatContainer, Contacts, Loader, Welcome } from '../components';
import { changePage } from '../utils/Navigation';
import { io } from 'socket.io-client';

const Chat = () => {
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [connectedUsers, setConnectedUsers] = useState([]);
  const windowRef = useRef(false);
  const socket = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const getpage = async () => {
      changePage().then((page) => {
        navigate(page);
      });
    };
    getpage();
  }, []);
  useEffect(() => {
    if (user) {
      socket.current = io(host);
      socket.current.emit('add-user', user._id);
      socket.current.on('user-connected', (data) => {
        setConnectedUsers(data);
      });

      if (!windowRef.current) {
        window.addEventListener('beforeunload', () => {
          disconnect(user);
        });
        windowRef.current = true;
      }
    }
  }, [user]);

  const disconnect = (user) => {
    socket.current.emit('user-disconnect', user._id);
    socket.current.disconnect();
  };
  useEffect(() => {
    const getUsers = async () => {
      const user = await JSON.parse(localStorage.getItem('chat-app-user'));
      const { data } = await axios.get(`${allUsersRoute}/${user._id}`);
      setUser(user);
      setContacts(data);
      setLoading(false);
    };
    getUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="chat-container">
          <Contacts
            connectedUsers={connectedUsers}
            contacts={contacts}
            setSelectedContact={setSelectedContact}
            selectedContact={selectedContact}
          />
          {!selectedContact ? (
            user && <Welcome user={user} disconnect={disconnect} />
          ) : (
            <ChatContainer
              connectedUsers={connectedUsers}
              selectedContact={selectedContact}
              user={user}
              socket={socket}
              disconnect={disconnect}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Chat;
