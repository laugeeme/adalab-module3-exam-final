/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';
import PageError from '../images/error.png';

const PageNotFound = () => {
  return (
    <React.Fragment>
      <div className="backNotFound-container">
        <Link to="/main">Back</Link>
      </div> 
      <div className="pageNotFound">
        <img src={PageError} alt="Error 404"></img>
      </div>
    </React.Fragment>
  );
};

export default PageNotFound;
