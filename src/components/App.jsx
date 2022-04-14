import React, { Component } from 'react';
import ContactsList from 'components/ContactsList/ContactsList';
import Form from './Form/Form';
import contacts from 'db/contacts';

class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <ContactsList onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
export default App;
