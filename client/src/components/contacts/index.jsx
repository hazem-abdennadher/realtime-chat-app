import ContactCard from '../contact Card';
import { StyledContacts } from './styles';

const Contacts = ({
  contacts,
  setSelectedContact,
  selectedContact,
  connectedUsers,
}) => {
  return (
    <StyledContacts>
      <div className="contacts">
        {contacts.map((contact, index) => (
          <div
            className={`contact-item ${
              selectedContact === contact ? 'selected' : ''
            }`}
            onClick={() => setSelectedContact(contact)}
            key={index}
          >
            <ContactCard contact={contact} connectedUsers={connectedUsers} />
          </div>
        ))}
      </div>
      <div className="hide"></div>
    </StyledContacts>
  );
};

export default Contacts;
