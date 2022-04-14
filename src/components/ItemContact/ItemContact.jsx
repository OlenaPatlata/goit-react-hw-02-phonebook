import React from 'react';
import s from './ItemContact.module.css';

const ItemContact = props => {
  const { contact, onDeleteContact } = props;
  return (
    <li className={s.item}>
      <span className={s.text}>{contact.name}:</span>
      <span className={s.text}>{contact.number}</span>
      <button type="button" onClick={onDeleteContact}>
        Удалить
      </button>
    </li>
  );
};

export default ItemContact;
