import React from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import s from './Filter.module.css';
import { filterChange } from '../../redux/contacts/contacts-actions';

function Filter({ filter, filterChange }) {
  return (
    <label className={s.label}>
      <span>find contact by name</span>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={filterChange}
        className={s.input}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: string.isRequired,
  filterChange: func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  filterChange: evt => dispatch(filterChange(evt.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
