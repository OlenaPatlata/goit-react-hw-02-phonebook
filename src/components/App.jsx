import React, { Component } from 'react';
import ContactsList from 'components/ContactsList/ContactsList';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import initialContacts from 'db/initialContacts';
import shortid from 'shortid';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: initialContacts,

    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  addContact = contactNew => {
    const contactAdd = {
      id: shortid.generate(),
      name: contactNew.name,
      number: contactNew.number,
    };
    this.setState(prevState => ({
      contacts: [contactAdd, ...prevState.contacts],
    }));
  };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== e.target.id
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const vizibleContacts = this.getVisibleContacts();

    return (
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <Form
          onSubmit={this.formSubmitHandler}
          onAddContact={this.addContact}
        />
        <h1 className={s.title}>Contacts</h1>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactsList
          vizibleContacts={vizibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
