/* eslint-disable no-useless-constructor */
import React from 'react';

const FilterSearch = (props) => {
  const updateInputValue = (evt) => {
    evt.preventDefault();
    props.handleInputValue(evt.currentTarget.value);
  };

  return (
    <form className="filterSearch-container">
      <label>¡Busca tu personaje!</label>
      <input type="text" value={props.value} onChange={updateInputValue} />
    </form>
  );
};

export default FilterSearch;
