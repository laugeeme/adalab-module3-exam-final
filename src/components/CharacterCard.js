/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types';
import Alien from '../images/alien.png';
import Human from '../images/human.png';

const CharacterCard = (props) => {
  const { img, name, specie } = props;
  return (
    <div className="characterCard-container">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <div className="characterCard-info">
        <img src={specie === 'Human' ? Human : Alien} alt={specie}></img>
      </div>
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
