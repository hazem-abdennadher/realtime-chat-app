import { StyledLogout } from './styles';
import { useNavigate } from 'react-router-dom';
import { BiPowerOff } from 'react-icons/bi';
import { removeUser } from '../../utils/Navigation';

const Logout = ({ user, disconnect }) => {
  const navigate = useNavigate();
  return (
    <StyledLogout
      onClick={() => {
        removeUser();
        disconnect(user);
        navigate('/login');
      }}
    >
      <BiPowerOff />
    </StyledLogout>
  );
};

export default Logout;
