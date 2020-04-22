/* eslint-disable no-useless-constructor */
import React from 'react';

const CharacterCard = (props) => {
  return (
    <div className="characterCard-container">
      <img src={props.img} alt={props.name} />
      <h4>{props.name}</h4>
      <p>Specie: {props.specie}</p>
      <p>Gender: {props.gender}</p>
    </div>
  );
};

export default CharacterCard;
