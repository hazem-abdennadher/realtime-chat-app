import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { setAvatarRoute } from '../utils/APIRoutes';
import { Buffer } from 'buffer';
import Avatars from '../components/avatars';
import Loader from '../components/loader';
import { changePage } from '../utils/Navigation';

const Avatar = () => {
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  const setProfilePicture = async () => {
    if (selectedAvatar === null) {
      toast.error('Please select an avatar', toastOptions);
      return;
    } else {
      const user = await JSON.parse(localStorage.getItem('chat-app-user'));
      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });
      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.iamge;
        localStorage.setItem('chat-app-user', JSON.stringify(user));
        navigate('/');
      } else {
        toast.error(
          'Error setting profile picture, Please try again',
          toastOptions
        );
      }
    }
  };

  useEffect(() => {
    const getpage = async () => {
      changePage().then((page) => {
        navigate(page);
      });
    };
    getpage();
  }, []);

  useEffect(() => {
    const fetchAvatars = async () => {
      const data = [];
      for (let i = 0; i < 4; i++) {
        let seed = Math.floor(Math.random() * 1000);
        let image = await axios.get(
          `https://avatars.dicebear.com/api/personas/${seed}.svg`
        );
        let buffer = new Buffer(image.data);
        data.push(buffer.toString('base64'));
      }
      setAvatars(data);
      setIsLoading(false);
    };
    fetchAvatars();
  }, []);
  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <Avatars
          avatars={avatars}
          selectedAvatar={selectedAvatar}
          setSelectedAvatar={setSelectedAvatar}
          setProfilePicture={setProfilePicture}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default Avatar;
