/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <div className="characterDetail-container">
      <Link to="/">Back</Link>
      <img src={props.dataObj.image} alt={props.dataObj.name} />
      <h4>{props.dataObj.name}</h4>
      <p>Specie: {props.dataObj.species}</p>
      <p>Origin: {props.dataObj.origin.name}</p>
      <p>Status: {props.dataObj.status}</p>
      <p>Number of episodes: {props.dataObj.episode.length}</p>
    </div>
  );
};

export default CharacterDetail;
