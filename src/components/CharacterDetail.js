/* eslint-disable no-useless-constructor */
import React from 'react';

const CharacterDetail = (props) => {
  return (
    <div className="characterDetail-container">
      <img src={props.dataObj.image} alt={props.dataObj.name} />
      <h4>{props.dataObj.name}</h4>
      <p>Specie: {props.dataObj.species}</p>
      <p>Origin: {props.dataObj.origin.name}</p>
      <p>Status: {props.dataObj.status}</p>
      {/* <p>{props.dataObj.episode}</p> */}
    </div>
  );
};

export default CharacterDetail;
