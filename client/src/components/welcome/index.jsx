import { StyledWelcome } from './styles';
import Robot from '../../assets/images/robot.gif';
import Logout from '../logout';
const Welcome = ({ user, disconnect }) => {
  return (
    <StyledWelcome>
      <div className="welcome">
        <img src={Robot} alt="" />
        <h1>
          Welcome, <span>{user.username}!</span>
        </h1>
        <h3>Please select a chat to start messaging.</h3>
        <Logout user={user} disconnect={disconnect} />
      </div>

      <div className="hide"></div>
    </StyledWelcome>
  );
};

export default Welcome;
