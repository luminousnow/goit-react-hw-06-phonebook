import React from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import s from './Filter.module.css';
import { handleFilterChange } from '../../redux/contacts/contacts-actions';

function Filter({ filter, handleFilterChange }) {
  return (
    <label className={s.label}>
      <span>find contact by name</span>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        className={s.input}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: string.isRequired,
  handleFilterChange: func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  handleFilterChange: evt =>
    dispatch(handleFilterChange(evt.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
