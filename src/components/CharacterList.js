/* eslint-disable no-useless-constructor */
import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import NoResults from './NoResults';

const CharacterList = (props) => {

  if (props.data.length === 0) {
    return <NoResults />

  }else {


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
              <Link to={`/detail/${dataObj.id}`}>
                <CharacterCard
                  img={dataObj.image}
                  name={dataObj.name}
                  gender={dataObj.gender}
                  specie={dataObj.species}
                />
              </Link>
            </li>
          ))}
      </ul>
    );



  }

};

export default CharacterList;
