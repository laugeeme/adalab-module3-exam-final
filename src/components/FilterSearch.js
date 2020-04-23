/* eslint-disable no-useless-constructor */
import React from 'react';

const FilterSearch = (props) => {
  const updateInputValue = (evt) => {
    evt.preventDefault();
    props.handleInputValue(evt.currentTarget.value);
  };

  return (
    <form className="filterSearch-container">
      <label htmlFor="value">¡Busca tu personaje!</label>
      <input
        type="text"
        value={props.value}
        name="value"
        onChange={updateInputValue}
        placeholder=" Ex: 'Rick'"
      />
    </form>
  );
};

export default FilterSearch;
