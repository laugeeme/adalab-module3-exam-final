/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types';

const FilterSearch = (props) => {
  const { value, resetValue, handleInputValue } = props;

  const updateInputValue = (evt) => {
    evt.preventDefault();
    handleInputValue(evt.currentTarget.value);
  };

  const handleClick = () => resetValue();

  return (
    <form className="filterSearch-container">
      <label htmlFor="value">Write something: </label>
      <div>
        <input
          type="text"
          value={value}
          name="value"
          onChange={updateInputValue}
          placeholder=" Example: 'Rick'"
        />
        <button className="removeButton" type="button" onClick={handleClick}>
          &#x2718;
        </button>
      </div>
    </form>
  );
};

FilterSearch.propTypes = {
  value: PropTypes.string,
};

export default FilterSearch;
