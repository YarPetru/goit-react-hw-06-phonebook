import { nanoid } from 'nanoid';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().startsWith(filter)
  );

  // onDeleteContact = () => {
  //   const updtdList = contacts.filter(contact => contact.key !== );
  // };

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(contact => (
        <li className={s.contactInfo} key={nanoid()}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={s.deleteBtn}
            // data-id={id}
            // onClick={onDeleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactList;
