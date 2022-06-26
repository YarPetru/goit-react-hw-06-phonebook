import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // componentDidMount
  useEffect(() => {
    const localContacts = JSON.parse(
      localStorage.getItem('actual_contact_list')
    );
    // console.log(localContacts);
    if (localContacts) {
      setContacts(localContacts);
    } else return;
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('actual_contact_list', JSON.stringify(contacts));
  }, [contacts]);

  const handleInputChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const addContacts = ({ name, number }) => {
    const currentNames = contacts.map(contact => contact.name.toLowerCase());
    const contact = { name, number, id: nanoid() };
    // console.log(contact);
    // console.log(currentNames);

    currentNames.includes(name.toLowerCase()) &&
      toast.info('You already have this contact');

    !currentNames.includes(name.toLowerCase()) &&
      setContacts(prev => [contact, ...prev]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    console.log(`delete contact with id: ${id}`);
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContacts} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onInputChange={handleInputChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={deleteContact}
        />
      </Section>
      <ToastContainer position="top-center" autoClose={2500} theme="colored" />
    </>
  );
};
