import { nanoid } from 'nanoid';

const ContactList = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().startsWith(filter)
  );

  return (
    <ul className="contactList">
      {filteredContacts.map(contact => (
        <li className="contactInfo" key={nanoid()}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
