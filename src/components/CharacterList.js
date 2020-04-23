/* eslint-disable no-useless-constructor */
import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
  
  return (
    <ul className="characterList-container">
      {props.data

        .filter(
          (dataObj) =>
            props.inputValue === '' ||
            dataObj.name.toLowerCase().includes(props.inputValue.toLowerCase())
        )
        .map((dataObj) => {
          return props.data.length === 0 ? 
            (<span>There is not results for {props.inputValue}</span>)
           : (
            <li key={dataObj.id}>
              <Link to={`/detail/${dataObj.id}`}>
                <CharacterCard
                  img={dataObj.image}
                  name={dataObj.name}
                  gender={dataObj.gender}
                  specie={dataObj.species}
                />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};


CharacterList.propTypes = {
  dataObj: PropTypes.object,
};


export default CharacterList;
