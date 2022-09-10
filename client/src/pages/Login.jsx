import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes';
import { AiOutlineUser } from 'react-icons/ai';
import { IoKeyOutline } from 'react-icons/io5';
import { changePage } from '../utils/Navigation';
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      } else if (data.status === true) {
        const user = JSON.stringify(data.user);
        localStorage.setItem('chat-app-user', user);
        if (user) {
          if (user.isAvatarImageSet) {
            navigate('/');
          } else {
            navigate('/avatar');
          }
        }
      }
    }
  };
  const handleValidation = () => {
    if (username === '') {
      toast.error('Username is required', toastOptions);
      return false;
    }
    if (username.length < 3) {
      toast.error('Username should be greater than 3 characters', toastOptions);
      return false;
    }
    if (password === '') {
      toast.error('Password is required', toastOptions);
      return false;
    }
    return true;
  };
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };
  useEffect(() => {
    const getpage = async () => {
      changePage().then((page) => {
        navigate(page);
      });
    };
    getpage();
  }, []);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="login-form">
        <div className="brand">
          <h1>Chat.io</h1>
          <p>Please enter you Login and your Password</p>
        </div>
        <div className="form-item">
          <AiOutlineUser className="icon" />
          <input
            type="text"
            className="type-text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-item">
          <IoKeyOutline className="icon" />
          <input
            type="password"
            className="type-text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Login
        </button>

        <span>
          Not a member yet? <Link to="/Register">Register!</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
