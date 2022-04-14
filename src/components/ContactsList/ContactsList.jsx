import React, { Component } from 'react';
// import s from './ContactsList.module.css';
import ItemContact from 'components/ItemContact/ItemContact';

const ContactsList = props => {
  const { contacts, onDeleteContact } = props;
  return (
    <ul>
      {/* {contacts.map(contact => {
        return <ItemContact key={contact.id} contact={contact} />;
      })} */}
    </ul>
  );
};

export default ContactsList;

// class ContactsList extends Component {
//   state = {};

//   render() {
//     return <></>;
//   }
// }
// export default ContactsList;
