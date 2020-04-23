/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  const { image, name, species, origin, status, episode } = props.dataObj;
  return (
    <React.Fragment>
      <div className="characterDetail-container">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Specie: {species}</p>
        <p>Origin: {origin.name}</p>
        <p>Status: {status}</p>
        <p>Number of episodes: {episode.length}</p>
      </div>
      <Link to="/main">Back</Link>
    </React.Fragment>
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
