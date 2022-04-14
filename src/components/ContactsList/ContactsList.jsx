import React from 'react';
import s from './ContactsList.module.css';
import ItemContact from 'components/ItemContact/ItemContact';

const ContactsList = props => {
  const { vizibleContacts, onDeleteContact } = props;

  return (
    <ul className={s.list}>
      {vizibleContacts?.length
        ? vizibleContacts.map(contact => (
            <ItemContact
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          ))
        : ''}
    </ul>
  );
};

export default ContactsList;
