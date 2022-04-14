import React from 'react';
import s from './ItemContact.module.css';

const ItemContact = props => {
  const { contact, onDeleteContact } = props;
  return (
    <li className={s.item} id={contact.id}>
      <p className={s.text}>
        {contact.name}: {contact.number}
      </p>
      <button
        id={contact.id}
        type="button"
        onClick={onDeleteContact}
        className={s.btn}
      >
        Delete
      </button>
    </li>
  );
};

export default ItemContact;
