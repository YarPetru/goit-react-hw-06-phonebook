import { nanoid } from 'nanoid';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().startsWith(filter)
  );

  // onDeleteContact = () => {
  //   const updtdList = contacts.filter(contact => contact.key !== );
  // };

  const id = nanoid();

  return (
    <ul className="contactList">
      {filteredContacts.map(contact => (
        <li className="contactInfo" key={id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className="deleteBtn"
            data-id={id}
            // onClick={onDeleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
