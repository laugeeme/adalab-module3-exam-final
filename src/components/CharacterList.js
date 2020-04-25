/* eslint-disable no-useless-constructor */
import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import NoResults from './NoResults';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
  const { data, inputValue } = props;
  const isResult = data.filter((dataObj) =>
    dataObj.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return !isResult.length && inputValue !== '' ? (
    <NoResults inputValue={inputValue} />
  ) : (
    <ul className="characterList-container">
      {data

        .sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          }
          return 0;
        })

        .filter(
          (dataObj) =>
            inputValue === '' ||
            dataObj.name.toLowerCase().includes(props.inputValue.toLowerCase())
        )
        .map((dataObj) => (
          <li key={dataObj.id} className="characterListLi">
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
};

CharacterList.propTypes = {
  inputValue: PropTypes.string,
};

export default CharacterList;
