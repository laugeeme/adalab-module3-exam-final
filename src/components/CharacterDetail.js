/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Alien from '../images/alien.png';
import Human from '../images/human.png';
import Alive from '../images/alive.png';
import Unknown from '../images/unknown.png';
import Dead from '../images/dead.png';

const CharacterDetail = (props) => {
  const { image, name, species, origin, status, episode } = props.dataObj;

  const imageStatus = () => {
    if (status === 'Dead') {
      return Dead;
    } else if (status === 'Alive') {
      return Alive;
    } else {
      return Unknown;
    }
  };

  return (
    <React.Fragment>
      <div className="characterDetail-container">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <div className="characterDetail-info">
          <img src={species === 'Human' ? Human : Alien} alt={species} />
          <p>Origin: {origin.name}</p>
          <div className="characterDetail-info_status">
            <p>Status: </p>
            <img src={imageStatus()} alt={status} />
          </div>
          <p>Number of episodes: {episode.length}</p>
        </div>
      </div>
      <div className="back-container">
        <Link to="/main">Back</Link>
      </div>
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
