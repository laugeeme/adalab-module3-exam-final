/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  const {img, name, specie, gender} = props;
  return (
    <div className="characterCard-container">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>Specie: {specie}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};



CharacterCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};



export default CharacterCard;
