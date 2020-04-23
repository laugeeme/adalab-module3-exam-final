/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  const {image, name, species, origin, status, episode } = props.dataObj;
  return (
    <div className="characterDetail-container">
      <Link to="/">Back</Link>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Specie: {species}</p>
      <p>Origin: {origin.name}</p>
      <p>Status: {status}</p>
      <p>Number of episodes: {episode.length}</p>
    </div>
  );
};



CharacterDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
 
};


export default CharacterDetail;
