import { StyledContactCard } from './styles';

const ContactCard = ({ contact, selected, connectedUsers }) => {
  return (
    <StyledContactCard className={`${selected ? 'selected' : ''}`}>
      <div
        className={`card-img ${
          connectedUsers.includes(contact._id) ? 'online' : ''
        } `}
      >
        <img
          src={`data:image/svg+xml;base64,${contact.avatarImage}`}
          alt="avatar"
        />
      </div>
      <h1 className="username">{contact.username}</h1>
    </StyledContactCard>
  );
};

export default ContactCard;
