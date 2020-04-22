/* eslint-disable no-useless-constructor */
import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  return (
    <ul className="characterList-container">
      {props.data

        .filter(
          (dataObj) =>
            props.inputValue === '' ||
            dataObj.name.toLowerCase().includes(props.inputValue.toLowerCase())
        )
        .map((dataObj) => (
          <li key={dataObj.id}>
            <CharacterCard
              img={dataObj.image}
              name={dataObj.name}
              gender={dataObj.gender}
              specie={dataObj.species}
            />
          </li>
        ))}
    </ul>
  );
};

export default CharacterList;
