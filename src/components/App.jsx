import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContacts = ({ name, number }) => {
    const currentNames = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );
    const contact = { name, number, id: nanoid() };

    currentNames.includes(name.toLowerCase()) &&
      alert('You already have this contact');

    !currentNames.includes(name.toLowerCase()) &&
      this.setState(prev => ({
        contacts: [contact, ...prev.contacts],
      }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
    console.log(`delete this ${id}`);
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContacts} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} onInputChange={this.handleInputChange} />
          <ContactList
            contacts={contacts}
            filter={filter}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
