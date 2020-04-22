/* eslint-disable no-useless-constructor */
import React from 'react';



const FilterSearch = (props) => {
  return (
      <div className="characterCard-container">
           <img src={props.img} alt={props.name} />
           <h4>{props.name}</h4>
           <p>{props.specie}</p>
           <p>{props.gender}</p>
      </div>
    );

} 
  
  

export default FilterSearch;
