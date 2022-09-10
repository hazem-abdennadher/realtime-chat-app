import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { registerRoute } from '../utils/APIRoutes';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { IoKeyOutline } from 'react-icons/io5';
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  useEffect(() => {
    localStorage.removeItem('chat-app-user');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      } else if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user));
        navigate('/avatar');
      }
    }
  };
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
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
    if (email === '') {
      toast.error('Email is required', toastOptions);
      return false;
    }
    if (password === '') {
      toast.error('Password is required', toastOptions);
      return false;
    }
    if (password !== password2) {
      toast.error('Passwords do not match', toastOptions);
      return false;
    }
    return true;
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="register-form">
        <div className="brand">
          <h1>Chat.io</h1>
          <p>Connect with friends on Chat.io.</p>
        </div>
        <div className="form-item">
          <AiOutlineUser className="icon" />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="type-text"
          />
        </div>
        <div className="form-item">
          <AiOutlineMail className="icon" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="type-text"
          />
        </div>
        <div className="form-item">
          <IoKeyOutline className="icon" />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="type-text"
          />
        </div>
        <div className="form-item">
          <IoKeyOutline className="icon" />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            className="type-text"
          />
        </div>

        <button type="submit" className="submit">
          Create User
        </button>
        <span>
          Already have an account? <Link to="/login">Login!</Link>
        </span>
      </form>
      <ToastContainer />
    </>
  );
};

export default Register;
