import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';
import { filterChange } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <span>find contact by name</span>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={evt => dispatch(filterChange(evt.currentTarget.value))}
        className={s.input}
      />
    </label>
  );
}

export default Filter;
